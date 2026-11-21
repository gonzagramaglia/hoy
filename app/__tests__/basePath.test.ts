import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getAssetPath } from "@/utils/basePath";

describe("getAssetPath", () => {
    it("returns external and data URLs as-is", () => {
        expect(getAssetPath("https://example.com/icon.png")).toBe("https://example.com/icon.png");
        expect(getAssetPath("http://example.com/icon.png")).toBe("http://example.com/icon.png");
        expect(getAssetPath("data:image/svg+xml,...")).toBe("data:image/svg+xml,...");
        expect(getAssetPath("//cdn.example.com/img.png")).toBe("//cdn.example.com/img.png");
    });

    it("returns clean path with leading slash for local asset", () => {
        expect(getAssetPath("notes.png")).toMatch(/\/notes\.png$/);
        expect(getAssetPath("/notes.png")).toMatch(/\/notes\.png$/);
    });

    it("handles empty or falsy inputs", () => {
        expect(getAssetPath("")).toBe("");
    });
});
