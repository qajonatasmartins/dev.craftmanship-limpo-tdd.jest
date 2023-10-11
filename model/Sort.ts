export default class Sort {
    public sortList(list: number[]) {
        if (list.length > 1) {
            for (let limit = list.length - 1; limit > 0; limit--) {
                for (let firstIndex = 0; firstIndex < limit; firstIndex++) {
                    let secondIndex = firstIndex + 1
                    if (list[firstIndex] > list[secondIndex]) {
                        let first = list[firstIndex]
                        let second = list[secondIndex]
                        list[firstIndex] = second
                        list[secondIndex] = first
                    }

                }
            }
        }
        return list
    }
}