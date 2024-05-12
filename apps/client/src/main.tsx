import { createRoot } from 'react-dom/client'
import { OidcConfiguration, OidcProvider } from '@axa-fr/react-oidc'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app'
import { setupStore } from '@nooota/state/store'
import { Provider } from 'react-redux';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const store = setupStore()

const oidcConfig: OidcConfiguration = {
  client_id: 'frontend',
  redirect_uri: 'http://localhost:4200/authentication/callback',
  silent_redirect_uri: window.location.origin + '/authentication/silent_callback',
  scope: 'openid profile',

  authority: 'http://localhost:8080/realms/nooota',
  service_worker_only: false,
  demonstrating_proof_of_possession: false
}

root.render(
  <StrictMode>
    <OidcProvider configuration={oidcConfig}>
      <Provider store={store}>
        <BrowserRouter>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </BrowserRouter>
      </Provider>
    </OidcProvider>
  </StrictMode>
)
