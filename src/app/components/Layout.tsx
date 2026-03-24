import { Outlet, useLocation, useNavigation } from "react-router";
import { useEffect, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import { FooterNew } from "./FooterNew";
import { ScrollToTop } from "./ScrollToTop";
import { PageTransition } from "./PageTransition";
import { LayoutSEO } from "./LayoutSEO";
import { RouteSkeleton } from "./RouteSkeleton";
import { prefetchRoutesOnIdle } from "../utils/routePrefetch";

export function Layout() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isDevelopersRoute = pathname.startsWith("/developers");
  const [showRouteLoader, setShowRouteLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isDevelopersRoute) {
      return;
    }

    prefetchRoutesOnIdle(pathname);
  }, [isDevelopersRoute, pathname]);

  useEffect(() => {
    if (navigation.state === "idle" || isDevelopersRoute) {
      setShowRouteLoader(false);
      return;
    }

    // Increased timeout from 100ms to 300ms to prevent loader flashing on fast navigations
    const timer = window.setTimeout(() => {
      setShowRouteLoader(true);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [isDevelopersRoute, navigation.state]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <LayoutSEO />
      {!isDevelopersRoute && <NavigationBar />}

      <main className="relative">
        {isDevelopersRoute ? (
          <Outlet />
        ) : (
          <PageTransition>
            <Outlet />
          </PageTransition>
        )}
      </main>

      {!isDevelopersRoute && <FooterNew />}
      <ScrollToTop />

      {!isDevelopersRoute && showRouteLoader ? (
        <div className="pointer-events-none fixed inset-0 z-[90] transition-opacity duration-200">
          <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-white/8">
            <div className="h-full w-[32%] animate-[route-loader_1s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300" />
          </div>
          <div className="absolute inset-x-0 top-[80px] bottom-0">
            <RouteSkeleton mode="overlay" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
