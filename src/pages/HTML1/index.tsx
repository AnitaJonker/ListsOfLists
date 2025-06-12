import Layout from "~/components/Layout/Layout";
import Image from "next/image";
// import flowers from "~/static/images/flowers.jpg";
import friends from "~/static/images/IMG_1761.jpg";

const Profile = () => {
  return (
    <>
      <div className="flex gap-10">
        <div>
          <div className="dot relative">
            <label className="absolute top-20 left-20">Circle</label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div>Fullname</div>
            <span className="text-s font-light">Anita Jonker</span>
          </div>
          <div>
            <div>Surname</div>
            <span className="text-s font-light">Anita Jonker</span>
          </div>
          <div>
            <div>Email</div>
            <span className="text-s font-light">
              anitaroneljonker@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Index() {
  return (
    <>
      <Layout>
        <section>
          <Image id="header-image" src={friends} alt="" />
        </section>
        <div className="relative flex h-150 w-full justify-end gap-10 bg-[#F5F5F5] px-30 pt-30">
          <h1 className="absolute top-10 right-100 text-2xl text-purple-900 uppercase">
            About Me
          </h1>
          <Profile />
          <div className="h-50 w-50 bg-red-500"></div>
          <div className="h-50 w-50 bg-purple-500"></div>
          <div className="h-50 w-50 bg-green-500"></div>
        </div>
      </Layout>
    </>
  );
}
