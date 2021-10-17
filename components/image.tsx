import Image from "next/image";

export const ComicImage = () => {
  return (
    <div className={"m-4"}>
      <Image
        src={"/episodes/episode-1/Episode1.png"}
        alt="Image of kitty"
        height={570}
        width={800}
      />
    </div>
  );
};
