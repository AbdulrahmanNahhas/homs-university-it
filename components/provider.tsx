"use client";
import SearchDialog from "@/components/search";
import { RootProvider } from "fumadocs-ui/provider/next";
import { type ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      dir="rtl"
      search={{ SearchDialog }}
      i18n={{
        locale: "ar",
        translations: {
          toc: "في هذه الصفحة",
          search: "بحث",
          lastUpdate: "آخر تحديث",
          nextPage: "الصفحة التالية",
          previousPage: "الصفحة السابقة",
          markdownCopy: "نسخ المادة",
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
