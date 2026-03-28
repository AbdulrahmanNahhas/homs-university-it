import Link from "next/link";
import {
  Cpu,
  Code2,
  Binary,
  CircuitBoard,
  BookOpen,
  Search,
  Milestone,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  const years = [
    {
      year: "السنة الأولى",
      label: "First Year",
      description: "أساسيات الهندسة الإلكترونية والبرمجة والرياضيات",
      semesters: [
        {
          id: 1,
          title: "الفصل الأول",
          en: "Semester 1",
          href: "/curriculum/semester-1",
          icon: <Binary className="w-5 h-5 text-blue-500" />,
        },
        {
          id: 2,
          title: "الفصل الثاني",
          en: "Semester 2",
          href: "/curriculum/semester-2",
          icon: <Cpu className="w-5 h-5 text-indigo-500" />,
        },
      ],
    },
    {
      year: "السنة الثانية",
      label: "Second Year",
      description: "تعميق المفاهيم البرمجية والتحليل العددي والإلكترونيات",
      semesters: [
        {
          id: 3,
          title: "الفصل الثالث",
          en: "Semester 3",
          href: "/curriculum/semester-3",
          icon: <Code2 className="w-5 h-5 text-purple-500" />,
        },
        {
          id: 4,
          title: "الفصل الرابع",
          en: "Semester 4",
          href: "/curriculum/semester-4",
          icon: <CircuitBoard className="w-5 h-5 text-pink-500" />,
        },
      ],
    },
    {
      year: "السنة الثالثة",
      label: "Third Year",
      description: "نظم التشغيل، هندسة الحاسوب، وتطوير النظم المتقدمة",
      semesters: [
        {
          id: 5,
          title: "الفصل الخامس",
          en: "Semester 5",
          href: "/curriculum/semester-5",
          icon: <Milestone className="w-5 h-5 text-orange-500" />,
        },
        {
          id: 6,
          title: "الفصل السادس",
          en: "Semester 6",
          href: "/curriculum/semester-6",
          icon: <Layers className="w-5 h-5 text-amber-500" />,
        },
      ],
    },
    {
      year: "السنة الرابعة",
      label: "Fourth Year",
      description: "التخصص في المجالات المتقدمة وإدارة المشاريع",
      semesters: [
        {
          id: 7,
          title: "الفصل السابع",
          en: "Semester 7",
          href: "/curriculum/semester-7",
          icon: <Search className="w-5 h-5 text-emerald-500" />,
        },
        {
          id: 8,
          title: "الفصل الثامن",
          en: "Semester 8",
          href: "/curriculum/semester-8",
          icon: <BookOpen className="w-5 h-5 text-teal-500" />,
        },
      ],
    },
    {
      year: "السنة الخامسة",
      label: "Fifth Year",
      description: "مشاريع التخرج والجاهزية لسوق العمل الاحترافي",
      semesters: [
        {
          id: 9,
          title: "الفصل التاسع",
          en: "Semester 9",
          href: "/curriculum/semester-9",
          icon: <GraduationCap className="w-5 h-5 text-red-500" />,
        },
        {
          id: 10,
          title: "الفصل العاشر",
          en: "Semester 10",
          href: "/curriculum/semester-10",
          icon: <CircuitBoard className="w-5 h-5 text-rose-500" />,
        },
      ],
    },
  ];

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto my-10 gap-6">
      {years.map((year, index) => (
        <div
          key={year.year}
          className="relative flex flex-col items-start gap-2"
        >
          <div className="flex items-center gap-4">
            <div className="flex-none rounded-2xl bg-primary p-3 border">
              <Milestone className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {year.year}
              </h2>
              <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
                {year.label}
              </p>
            </div>
          </div>

          <div className="relative w-full rounded-3xl bg-card border p-4 shadow-none group">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {year.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {year.semesters.map((semester) => (
                <Link
                  key={semester.href}
                  href={semester.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:bg-gray-400/10"
                >
                  <div className="p-2 rounded-xl bg-muted group-hover/item:bg-primary shadow-sm group-hover/item:text-primary-foreground transition-colors">
                    {semester.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground group-hover/item:text-primary transition-colors tracking-tight">
                      {semester.title}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase font-medium">
                      {semester.en}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
