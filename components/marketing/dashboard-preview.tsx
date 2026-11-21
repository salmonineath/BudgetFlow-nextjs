import { formatDemoMoney, type LandingDemo } from "./demo-data";

// Rows reveal one after another once the card has settled in.
const ROW_STAGGER_BASE_MS = 800;
const ROW_STAGGER_STEP_MS = 90;

export function DashboardPreview({ demo }: { demo: LandingDemo }) {
  return (
    <div className="animate-fade-up-scale stagger-6 w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-semibold text-foreground">
            {demo.shortMonth}
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Example Cycle</p>
            <p className="text-sm font-semibold text-foreground">
              {demo.budgetLabel}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-foreground">
          Safe Buffer
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-surface-muted p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium uppercase tracking-wide text-muted-foreground">
            Remaining Balance
          </span>
          <span className="font-medium text-primary-text">
            {demo.spentPercent}% spent
          </span>
        </div>

        <p className="mt-1 text-3xl font-bold text-foreground">
          {formatDemoMoney(demo.remaining)}
        </p>

        <div className="mt-3 h-2 w-full rounded-full bg-border-strong">
          <div
            className="animate-grow-bar stagger-8 h-2 rounded-full bg-primary"
            style={{ width: `${demo.spentPercent}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Monthly Budget:{" "}
            <span className="font-semibold text-foreground">
              {formatDemoMoney(demo.budget)}
            </span>
          </span>
          <span>
            Total Spent:{" "}
            <span className="font-semibold text-foreground">
              {formatDemoMoney(demo.spent)}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Recent Logs ({demo.recentTransactions.length} of{" "}
            {demo.transactions.length})
          </span>
          <span>Amount</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          {demo.recentTransactions.map((log, index) => (
            <div
              key={log.title}
              className="animate-fade-up flex items-center justify-between rounded-xl bg-surface-muted px-3 py-2.5"
              style={{
                animationDelay: `${ROW_STAGGER_BASE_MS + index * ROW_STAGGER_STEP_MS}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-base">
                  {log.emoji}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {log.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{log.meta}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">
                -{formatDemoMoney(log.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
        <span className="text-muted-foreground">
          Total manual entries: {demo.transactions.length}
        </span>
        <span className="font-medium text-primary-text">
          Manual expense example
        </span>
      </div>
    </div>
  );
}
