import {EventDispatcher} from "../EventDispatcher";

export function getEventDispatcher(): EventDispatcher {
    return EventDispatcher.getInstance();
}