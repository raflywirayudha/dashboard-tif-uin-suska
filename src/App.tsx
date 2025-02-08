import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { onSigninCallback, userManager } from "./lib/keycloak";
import { queryClient } from "./lib/query-client";
import { ThemeProvider } from "@/components/themes/theme-provider";
import router from "./routers/app.router";
import { AlertDialog } from "./components/ui/alert-dialog";

const App = () => {
	return (
		<AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<AlertDialog>
						<RouterProvider router={router} />
					</AlertDialog>
				</ThemeProvider>
			</QueryClientProvider>
		</AuthProvider>
	);
};

export default App;
