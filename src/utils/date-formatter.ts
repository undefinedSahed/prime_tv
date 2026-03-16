import { formatDistanceToNow } from "date-fns";
import { bn, enUS } from "date-fns/locale";

export function formatRelativeTime(
  date: string | Date | number,
  locale: string = "bn",
) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: locale === "bn" ? bn : enUS,
  });
}
