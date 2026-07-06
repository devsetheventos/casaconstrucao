import { Navbar } from "@/components/app/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-router-devtools").then((m) => ({
        default: m.TanStackRouterDevtools,
      })),
    )
  : () => null;

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Suspense fallback={null}>
      <TanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
