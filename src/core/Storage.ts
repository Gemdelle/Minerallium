class Storage {
    data = [
        {id: 1, name: "anegirina", revealed: false},
        {id: 2, name: "calcantita", revealed: false},
        {
            id: 3, name: "kammererita", attoms: [
                {
                    atomicNumber: 29,
                    symbol: "Cu"
                },
                {
                    atomicNumber: 29,
                    symbol: "Cu"
                },
                {
                    atomicNumber: 27,
                    symbol: "Co",
                },
                {
                    atomicNumber: 27,
                    symbol: "Co",
                },
                {
                    atomicNumber: 27,
                    symbol: "Co",
                },
                {
                    atomicNumber: 67,
                    symbol: "Ho"
                },
                {
                    atomicNumber: 67,
                    symbol: "Ho"
                },
            ],
            formula: "Cu2CO3(HO)2", revealed: false
        },
        {id: 4, name: "kunzita", revealed: false},
        {id: 5, name: "labradorita", revealed: false},
        {id: 6, name: "magnetita", revealed: false},
        {id: 7, name: "olivino", revealed: false},
        {id: 8, name: "titanita", revealed: false},
        {id: 9, name: "turquesa", revealed: false},
        {id: 10, name: "zircón", revealed: false},
    ]

    retrieveCatalog() {
        return this.data
    }

    retrieveCatalogById(id: number) {
        return this.data.find((element) => {
            return element.id === id
        }) ?? this.data[0]
    }

    revealElementById(id: number) {
        let elementIndex = this.data.findIndex(element => element.id === id);
        this.data[elementIndex].revealed = true
    }
    unRevealElementById(id: number) {
        let elementIndex = this.data.findIndex(element => element.id === id);
        this.data[elementIndex].revealed = false
    }
}

export default Storage