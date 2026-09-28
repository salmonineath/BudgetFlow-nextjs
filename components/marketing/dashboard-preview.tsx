const RECENT_LOGS = [
  { emoji: "🍴", title: "Lunch", meta: "Food · Today", amount: "8.00" },
  { emoji: "⚡", title: "Internet Bill", meta: "Bills · Sep 7", amount: "20.00" },
  { emoji: "🏠", title: "Rent", meta: "Housing · Sep 1", amount: "150.00" },
];

// Rows reveal one after another once the card has settled in.
const ROW_STAGGER_BASE_MS = 800;
const ROW_STAGGER_STEP_MS = 90;

export function DashboardPreview() {
  return (
    <div className="animate-fade-up-scale stagger-6 w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-semibold text-foreground">
            Sep
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Active Cycle</p>
            <p className="text-sm font-semibold text-foreground">
              September Budget
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
          <span className="font-medium text-primary">42% spent</span>
        </div>

        <p className="mt-1 text-3xl font-bold text-foreground">$290.00</p>

        <div className="mt-3 h-2 w-full rounded-full bg-border-strong">
          <div className="animate-grow-bar stagger-8 h-2 w-[42%] rounded-full bg-primary" />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Monthly Budget:{" "}
            <span className="font-semibold text-foreground">$500.00</span>
          </span>
          <span>
            Total Spent:{" "}
            <span className="font-semibold text-foreground">$210.00</span>
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Recent Logs</span>
          <span>Amount</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          {RECENT_LOGS.map((log, index) => (
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
                -${log.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
        <span className="text-muted-foreground">Total manual entries: 6</span>
        <span className="font-medium text-primary">+ Add Expense (Instant)</span>
      </div>
    </div>
  );
}
