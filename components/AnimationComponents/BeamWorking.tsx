import { useRouter } from "next/navigation";
import { BlogWithSlug } from "@/lib/blog";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "../container";
import Image from "next/image";
import { Post } from "../../lib/blog";
import Link from "next/link";
import { format } from "date-fns";
export function BeamWorking({ params }: { params: Post }) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="flex justify-between items-center px-2 py-8">
        <Link href="/blog" className="flex space-x-2 items-center">
          <IconArrowLeft className="w-4 h-4 text-muted" />
          <span className="text-sm text-muted">Back</span>
        </Link>
      </div>
      <div className="w-full mx-auto">
        {params.coverPhoto[0]?.url ? (
          <Image
            src={params.coverPhoto[0]?.url}
            height="800"
            width="800"
            className="h-40 md:h-96 w-full aspect-square object-cover rounded-3xl [mask-image:radial-gradient(circle,white,transparent)]"
            alt={params.title}
          />
        ) : (
          <div className="h-40 md:h-96 w-full aspect-squace rounded-3xl shadow-derek bg-neutral-900 flex items-center justify-center"></div>
        )}
      </div>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="pb-8">
            <header className="flex flex-col">
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl ">
                {params.title}
              </h1>
            </header>
            <div className="mt-8 prose prose-sm prose-invert" data-mdx-content>
              {params.content.text}
            </div>
            <div className="flex space-x-2 items-center pt-12 border-t border-neutral-800 mt-12">
              <div className="flex space-x-2 items-center ">
                <Image
                  src={params.coverPhoto[0]?.url}
                  alt="SOmtimes better than nothing"
                  width={20}
                  height={20}
                  className="rounded-full h-5 w-5"
                />
                <p className="text-sm font-normal text-muted"></p>
              </div>
              <div className="h-5 rounded-lg w-0.5 bg-neutral-700" />
              <time
                dateTime={params.datePublished}
                className="flex items-center text-base "
              >
                <span className="text-muted text-sm">
                  {format(new Date(params.datePublished), "MMMM dd, yyyy")}
                </span>
              </time>
            </div>
          </article>
        </div>
      </div>

      <div className="flex justify-between items-center px-2 py-8">
        <Link href="/blog" className="flex space-x-2 items-center">
          <IconArrowLeft className="w-4 h-4 text-muted" />
          <span className="text-sm text-muted">Back</span>
        </Link>
      </div>
      <div className="w-full mx-auto">
        {params.coverPhoto[0]?.url ? (
          <Image
            src={params.coverPhoto[0]?.url}
            height="800"
            width="800"
            className="h-40 md:h-96 w-full aspect-square object-cover rounded-3xl [mask-image:radial-gradient(circle,white,transparent)]"
            alt={params.title}
          />
        ) : (
          <div className="h-40 md:h-96 w-full aspect-squace rounded-3xl shadow-derek bg-neutral-900 flex items-center justify-center"></div>
        )}
      </div>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="pb-8">
            <header className="flex flex-col">
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl ">
                {params.title}
              </h1>
            </header>
            <div className="mt-8 prose prose-sm prose-invert" data-mdx-content>
              {params.content.text}
            </div>
            <div className="flex space-x-2 items-center pt-12 border-t border-neutral-800 mt-12">
              <div className="flex space-x-2 items-center ">
                <Image
                  src={params.coverPhoto[0]?.url}
                  alt="SOmtimes better than nothing"
                  width={20}
                  height={20}
                  className="rounded-full h-5 w-5"
                />
                <p className="text-sm font-normal text-muted"></p>
              </div>
              <div className="h-5 rounded-lg w-0.5 bg-neutral-700" />
              <time
                dateTime={params.datePublished}
                className="flex items-center text-base "
              >
                <span className="text-muted text-sm">
                  {format(new Date(params.datePublished), "MMMM dd, yyyy")}
                </span>
              </time>
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
