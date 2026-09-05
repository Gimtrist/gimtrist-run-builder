import { execute } from "./DisplayObjectDispatchAddedToStageEventService";
import { DisplayObject } from "../../DisplayObject";
import { $stageAssignedMap } from "../../DisplayObjectUtil";
import { describe, expect, it, vi } from "vitest";
import { Event } from "@next2d/events";

describe("DisplayObjectDispatchAddedToStageEventService.js test", () =>
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

        $stageAssignedMap.add(displayObject.instanceId);

        expect(type).toBe("");
        expect(displayObject.$addedToStage).toBe(false);
        execute(displayObject);

        expect(type).toBe(Event.ADDED_TO_STAGE);
        $stageAssignedMap.delete(displayObject.instanceId);
        expect(displayObject.$addedToStage).toBe(true);
    });
});