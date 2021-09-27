import Image from "next/image";

export const ComicImage = () => {
  return (
    <div className={"m-4"}>
      <Image
        src={"http://placekitten.com/g/800/570"}
        alt="Image of kitty"
        height={570}
        width={800}
      />
    </div>
  );
};
