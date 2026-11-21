/** Illustrative data only. Never reads or changes a user's budget. */
const CATEGORY_PLANS = [
  { emoji: "🥗", name: "Food", planned: 120 },
  { emoji: "🏡", name: "Rent", planned: 150 },
  { emoji: "💡", name: "Bills", planned: 80 },
  { emoji: "🚆", name: "Transport", planned: 50 },
];

export function formatDemoMoney(amount: number, decimals = 2) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

export function createLandingDemo(now: Date) {
  // One UTC reporting period keeps all previews consistent across time zones.
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const day = now.getUTCDate();
  const dateLabel = (dayOfMonth: number) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month, dayOfMonth)));
  // Newest first; the dashboard intentionally shows only the first three.
  const transactions = [
    { emoji: "🍴", title: "Lunch", category: "Food", amount: 8, day },
    {
      emoji: "⚡",
      title: "Internet Bill",
      category: "Bills",
      amount: 20,
      day: Math.max(1, day - 1),
    },
    { emoji: "🏠", title: "Rent", category: "Rent", amount: 150, day: 1 },
    { emoji: "🥗", title: "Groceries", category: "Food", amount: 62, day: 1 },
    {
      emoji: "💡",
      title: "Electricity",
      category: "Bills",
      amount: 20,
      day: 1,
    },
    {
      emoji: "🚆",
      title: "Bus pass",
      category: "Transport",
      amount: 20,
      day: 1,
    },
  ].map((transaction) => ({
    ...transaction,
    date: new Date(Date.UTC(year, month, transaction.day)).toISOString(),
    meta: `${transaction.category} · ${dateLabel(transaction.day)}`,
  }));
  const categories = CATEGORY_PLANS.map((category) => {
    const spent = transactions
      .filter((transaction) => transaction.category === category.name)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    return {
      ...category,
      spent,
      remaining: category.planned - spent,
      percent: Math.round((spent / category.planned) * 100),
    };
  });
  const budget = 500;
  const assigned = categories.reduce(
    (sum, category) => sum + category.planned,
    0,
  );
  const spent = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC",
  }).format(now);

  return {
    year,
    period: `${monthName} ${year}`,
    budgetLabel: `${monthName} Budget`,
    shortMonth: new Intl.DateTimeFormat("en-US", {
      month: "short",
      timeZone: "UTC",
    }).format(now),
    budget,
    assigned,
    assignedPercent: Math.round((assigned / budget) * 100),
    spent,
    spentPercent: Math.round((spent / budget) * 100),
    remaining: budget - spent,
    categories,
    transactions,
    recentTransactions: transactions.slice(0, 3),
  };
}

export type LandingDemo = ReturnType<typeof createLandingDemo>;
