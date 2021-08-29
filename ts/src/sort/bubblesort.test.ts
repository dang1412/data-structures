import * as bubblesort from "./bubblesort"
// @ponicode
describe("bubblesort.bubbleSort", () => {
    test("0", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([100, 1, -5.48, 0, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([-5.48, -100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([-5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([-100, -100, 0, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([-5.48, 100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            bubblesort.bubbleSort([])
        }
    
        expect(callFunction).not.toThrow()
    })
})
