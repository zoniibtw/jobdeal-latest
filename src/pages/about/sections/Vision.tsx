import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="text-white pb-20 flex flex-col justify-center">
      <div className="container max-md:px-5 mx-auto text-center flex flex-col items-center justify-center mt-[75px]">
        <div className="w-full grid grid-cols-2 gap-20">
            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex gap-2">
                        <div className="">
                            <img src="" alt="" />
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-xl font-semibold leading-none">Vision</h1>
                            <h2 className="text-sm font-light leading-none opacity-80">Undertitle here.</h2>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores, veritatis cum, voluptas sapiente incidunt dolores accusamus similique officia laboriosam nam itaque eius est et impedit ad. Repellendus, non quasi.</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border border-white/25 bg-white/5 col-span-1 p-6">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex gap-2">
                        <div className="">
                            <img src="" alt="" />
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-xl font-semibold leading-none">USP</h1>
                            <h2 className="text-sm font-light leading-none opacity-80">Undertitle here.</h2>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores, veritatis cum, voluptas sapiente incidunt dolores accusamus similique officia laboriosam nam itaque eius est et impedit ad. Repellendus, non quasi.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
