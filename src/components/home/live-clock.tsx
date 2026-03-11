"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  const t = useTranslations("time");
  const locale = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dhakaTime = new Date(
    time.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
  );

  const hour24 = dhakaTime.getHours();
  const minute = dhakaTime.getMinutes();
  const hour12 = hour24 % 12 || 12;

  const formatNumber = (num: number) =>
    num.toLocaleString(locale === "bn" ? "bn-BD" : "en-US", {
      minimumIntegerDigits: 2,
    });

  // Determine period key
  let periodKey = "";

  if (hour24 >= 5 && hour24 < 12) periodKey = "morning";
  else if (hour24 >= 12 && hour24 < 15) periodKey = "afternoon";
  else if (hour24 >= 15 && hour24 < 18) periodKey = "evening";
  else if (hour24 >= 18 && hour24 < 21) periodKey = "night";
  else periodKey = "lateNight";

  const formattedTime = `${formatNumber(hour12)}:${formatNumber(minute)} ${t(
    periodKey,
  )}`;

  const formattedDate = new Intl.DateTimeFormat(
    locale === "bn" ? "bn-BD" : "en-US",
    {
      timeZone: "Asia/Dhaka",
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  ).format(time);

  return (
    <div className="lg:py-5 w-full">
      <div className="flex flex-col items-start justify-center rounded-lg bg-white p-5 shadow-sm border border-gray-50">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          {formattedTime}
        </h1>

        <p className="text-base font-medium text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
}
