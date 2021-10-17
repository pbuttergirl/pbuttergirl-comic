import glob from "glob";
import { groupBy } from "lodash";

export function getEpisodes() {
  const episodes = glob.sync(`./episodes/episode-*/*.png`);
  const groupedList = groupBy(episodes, groupFunction);
  const result = Object.entries(groupedList).map(([key, value]) => {
    return {
      name: (key.charAt(0).toUpperCase() + key.slice(1)).replace("-", " "),
      images: value,
    };
  });

  return result;
}

export const groupFunction = (episodePath: string) => {
  const result = episodePath.split("/")[2];
  return result;
};
