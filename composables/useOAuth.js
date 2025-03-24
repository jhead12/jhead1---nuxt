import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

export function useOAuth() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;
  const authorizationEndpoint = process.env.AUTHORIZATION_ENDPOINT;
  const tokenEndpoint = process.env.TOKEN_ENDPOINT;

  const router = useRouter();
  const route = useRoute();
  const accessToken = ref(null);

  const redirectToOAuthProvider = () => {
    const authorizationUrl = `${authorizationEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=YOUR_SCOPES`;
    window.location.href = authorizationUrl;
  };

  const exchangeAuthorizationCodeForToken = async (code) => {
    try {
      const response = await axios.post(tokenEndpoint, {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      });
      accessToken.value = response.data.access_token;
      console.log('Access Token:', accessToken.value);
      // Redirect or perform further actions with the access token
    } catch (error) {
      console.error('Error exchanging authorization code for token:', error);
    }
  };

  const handleOAuthCallback = () => {
    const code = route.query.code;
    if (code) {
      exchangeAuthorizationCodeForToken(code);
    }
  };

  return {
    accessToken,
    redirectToOAuthProvider,
    handleOAuthCallback,
  };
}