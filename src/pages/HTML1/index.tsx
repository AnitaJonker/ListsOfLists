import Layout from "~/components/Layout/Layout";
import Image from "next/image";
// import flowers from "~/static/images/flowers.jpg";
import friends from "~/static/images/IMG_1761.jpg";

const Profile = () => {
  return (
    <>
      <div className="flex gap-10">
        <div>
          <div className="first-border">
            <div className="dot relative">
              <label className="absolute">Circle</label>
            </div>
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
      <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full bg-pink-500">
        <div className="absolute top-0 left-0 h-1/2 w-full bg-black"></div>
        <div className="flex h-full w-full items-center justify-center font-bold text-white">
          Circle
        </div>
      </div>
      <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-t-[20px] border-black bg-pink-500">
        <div className="flex h-full w-full items-center justify-center font-bold text-white">
          Circle
        </div>
      </div>
      <div className="profile-photo-wrapper h-full w-full rounded-full">
        <Image src={friends} alt="Profile Image" />
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
