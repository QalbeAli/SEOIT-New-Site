import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocity() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <VelocityScroll
            text="Follow Us 😎"
            default_velocity={3}
            className="font-display pt-32 pb-32  text-center text-7xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-[11rem] md:leading-[5rem]"
          />
        </div>
        <div className="uppercase text-white ml-12 font-medium pb-8">Social Media And Contacts</div>
      </div>
    </>
  );
}
