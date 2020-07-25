import { useRouter } from 'next/router'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig()

function RedirectPage({ ctx }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/new/url');
    return; 
  }
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: `https://discord.com/oauth2/authorize?client_id=${publicRuntimeConfig.clientid}&response_type=code&scope=identify&redirect_uri=${encodeURIComponent(publicRuntimeConfig.url + '/callback')}`});
    ctx.res.end();
  }
  return { };
}

export default RedirectPage