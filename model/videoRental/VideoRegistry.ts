import ChildrenMovie from "./ChildrenMovie";
// import Movie from "./Movie";
import RegularMovie from "./RegularMovie";
import { videoType } from "./enum/videoType.enum";

export default class VideoRegistry {

    public getType(title: string): videoType {
        return title === videoType.REGULAR.toString() ? videoType.REGULAR : videoType.CHILDREN
    }

    public static getMovie(title: string) {
        switch (new VideoRegistry().getType(title)) {
            case videoType.REGULAR:
                return new RegularMovie(title)
            case videoType.CHILDREN:
                return new ChildrenMovie(title)
            default:
                break;
        }
        return null
    }
}