import Image from "next/image";

export type ComicImageProps = {
  imagePath: string;
};

export const ComicImage = (props: ComicImageProps) => {
  const { imagePath } = props;
  return (
    <div className={"w-1/2"}>
      <img src={imagePath} alt={"text of episode"} />
    </div>
  );
};
