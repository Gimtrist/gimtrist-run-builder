import { execute } from "./DisplayObjectDispatchAddedEventService";
import { DisplayObject } from "../../DisplayObject";
import { describe, expect, it, vi } from "vitest";
import { Event } from "@next2d/events";

describe("DisplayObjectDispatchAddedEventService.js test", () =>
{
    it("execute test case", () =>
    {
        const displayObject = new DisplayObject();
        displayObject.willTrigger = vi.fn(() => true);

        let type = "";
        displayObject.dispatchEvent = vi.fn((event): boolean =>
        {
            type = event.type;
            return true;
        });

        expect(type).toBe("");
        expect(displayObject.$added).toBe(false);
        execute(displayObject);
        expect(displayObject.$added).toBe(true);
        expect(type).toBe(Event.ADDED);
    });
});