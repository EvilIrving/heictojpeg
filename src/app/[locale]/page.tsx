import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import FAQ from "@/components/faq/page";
import Footer from "@/components/footer";
import { type Locale } from "@/i18n.config";

const Main = dynamic(() => import("@/components/element/Main"), {
  ssr: false,
});

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <>
      <Suspense
        fallback={
          <div className="space-y-4">
            <div className="h-48 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        }
      >
        <Main />
      </Suspense>
      <FAQ />
      <Footer />
    </>
  );
}
