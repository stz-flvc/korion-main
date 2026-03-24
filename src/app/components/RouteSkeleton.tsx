interface RouteSkeletonProps {
  mode?: "page" | "overlay";
}

export function RouteSkeleton({ mode = "page" }: RouteSkeletonProps) {
  const isOverlay = mode === "overlay";

  return (
    <div
      className={
        isOverlay
          ? "pointer-events-none absolute inset-0 z-40 overflow-hidden bg-[#050816]/72 backdrop-blur-[6px]"
          : "min-h-screen bg-[#050505] text-white"
      }
      aria-hidden="true"
    >
      <div
        className={
          isOverlay
            ? "mx-auto w-[min(1240px,calc(100%-48px))] px-0 py-8"
            : "mx-auto w-[min(1240px,calc(100%-48px))] px-0 py-10"
        }
      >
        <div className="route-skeleton__pulse">
          <div className="mb-8 flex items-center gap-3">
            <div className="route-skeleton__spinner" />
            <div className="h-3 w-28 rounded-full bg-white/10" />
          </div>

          <div className="mb-10 h-14 w-full rounded-2xl bg-white/6 route-skeleton__shine" />
          <div className="mb-6 h-10 w-40 rounded-xl bg-white/7 route-skeleton__shine" />
          <div className="mb-4 h-16 w-[min(720px,90%)] rounded-2xl bg-white/8 route-skeleton__shine" />
          <div className="mb-12 h-6 w-[min(860px,100%)] rounded-xl bg-white/6 route-skeleton__shine" />

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="h-44 rounded-[28px] bg-white/5 route-skeleton__shine" />
            <div className="h-44 rounded-[28px] bg-white/5 route-skeleton__shine" />
            <div className="h-44 rounded-[28px] bg-white/5 route-skeleton__shine" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="h-[420px] rounded-[32px] bg-white/4 route-skeleton__shine" />
            <div className="space-y-6">
              <div className="h-48 rounded-[28px] bg-white/5 route-skeleton__shine" />
              <div className="h-40 rounded-[28px] bg-white/5 route-skeleton__shine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
