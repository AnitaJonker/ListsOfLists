import Layout from "~/components/Layout/Layout";
import Image from "next/image";
import flowers from "~/static/images/flowers.jpg";

export default function Index() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="p-4 text-4xl text-white underline">Instagram</h1>
          <main className="flex flex-col items-center justify-center border-2 bg-black shadow-md">
            <h1 className="text-white">Collections</h1>
            <div className="grid grid-cols-4 items-center justify-center gap-10 p-4">
              <Image src={flowers} width={200} height={200} alt="" />
              <Image src={flowers} width={200} height={200} alt="" />
              <Image src={flowers} width={200} height={200} alt="" />

              <Image src={flowers} width={200} height={200} alt="" />
              <Image src={flowers} width={200} height={200} alt="" />
              <Image src={flowers} width={200} height={200} alt="" />
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
