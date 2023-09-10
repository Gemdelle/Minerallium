import AtomStatus from "../atoms/AtomStatus";

const compounds = [
    {
      name: "Sulfur Chloride",
      formula: "SCl2",
      composition: [
        {
          name: "S",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'liquid-red',
      state: 'reached-liquid',
      sequence: ["S", "Cl", "Cl"],
      selectionOptions: ["Fe", "N", "S", "Xe", "Cl", "Br", "Mc", "Ga"]
    },
    {
      name: "Boron Trifluoride",
      formula: "BF3",
      composition:[
        {
          name: "B",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["B", "F", "F"],
      selectionOptions: ["B", "N", "S", "Xe", "F", "Br", "Mc", "Ga"]
    },
    {
      name: "Beryllium Hydride",
      formula: "BeH2",
      composition: [
        {
          name: "Be",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'solid-colorless',
      state: 'reached-solid',
      sequence: ["Be", "H", "H"],
      selectionOptions: ["H", "N", "S", "Xe", "F", "Be", "Mc", "Ga"]
    },
    {
      name: "Phosphorus Tribromide",
      formula: "PBr3",
      composition:[
        {
          name: "P",
          electrons: 2,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Br",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Br",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Br",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'liquid-colorless',
      state: 'reached-liquid',
      sequence: ["P", "Br", "Br", "Br"],
      selectionOptions: ["Br", "N", "S", "Xe", "F", "P", "Mc", "Ga"]
    },
    {
      name: "Chlorine Monoxide",
      formula: "Cl2O",
      composition: [
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'gas-yellow',
      state: 'reached-gas',
      sequence: ["Cl", "Cl", "O"],
      selectionOptions: ["Br", "N", "Cl", "Xe", "F", "P", "O", "Ga"]
    },
    {
      name: "Xenon Tetrafluoride",
      formula: "XeF4",
      composition: [
        {
          name: "Xe",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 1,
      type: 'solid-colorless',
      state: 'reached-solid',
      sequence: ["Xe", "F", "F", "F", "F"],
      selectionOptions: ["Fe", "N", "O", "Xe","F", "C", "Br", "Mc", "Ga"]
    },
    {
      name: "Chloroform",
      formula: "CHCl3",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'liquid-colorless',
      state: 'reached-liquid',
      sequence: ["C", "H", "Cl", "Cl", "Cl"],
      selectionOptions: ["Fe", "C", "O", "Xe","F", "C", "Br", "Cl", "H"]
    },
    {
      name: "Phosphorus Pentafluoride",
      formula: "PF5",
      composition: [
        {
          name: "P",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["P", "F", "F", "F", "F", "F"],
      selectionOptions: ["Fe", "C", "O", "Xe","F", "C", "Br", "P", "H"]
    },
    {
      name: "Chloroethylene",
      formula: "C2HCl",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 0,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "C", "H", "Cl"],
      selectionOptions: ["Fe", "C", "O", "Cl","F", "C", "Br", "P", "H"]
    },
    {
      name: "Cobalt Chloride",
      formula: "COCl2",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "O", "Cl", "Cl"],
      selectionOptions: ["Co", "C", "O", "Cl","F", "C", "Br", "P", "H"]
    },
    {
      name: "Methyl Bromide",
      formula: "CH3Br",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Br",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "H", "H", "H", "Br"],
      selectionOptions: ["Fe", "C", "O", "Cl","F", "C", "Br", "P", "H"]
    },
    {
      name: "Dichlorodifluoromethane",
      formula: "CCl2F2",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "Cl",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 2,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "Cl", "Cl", "F", "F"],
      selectionOptions: ["Fe", "C", "O", "Cl","F", "C", "Br", "P", "H"]
    },
    {
      name: "Sulfur Hexafluoride",
      formula: "SF6",
      composition: [
        {
          name: "S",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        },
        {
          name: "F",
          electrons: 6,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["S", "F", "F", "F", "F", "F", "F"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Dimethyl Ether",
      formula: "CH3OCH3",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 0,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "C", "H", "H", "H", "H", "H", "H", "O"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Benzene",
      formula: "C6H6",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'liquid-yellow',
      state: 'reached-liquid',
      sequence: ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Ethane",
      formula: "C2H6",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'gas-colorless',
      state: 'reached-gas',
      sequence: ["C", "C", "H", "H", "H", "H", "H", "H"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Formic Acid",
      formula: "HCOOH",
      composition: [
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'liquid-colorless',
      state: 'reached-liquid',
      sequence: ["H", "H", "C", "O", "O"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Acetic Acid",
      formula: "CH3COOH",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'liquid-colorless',
      state: 'reached-liquid',
      sequence: ["C", "C", "H", "H", "H", "H", "O", "O"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Sulfuric Acid",
      formula: "H2SO4",
      composition: [
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "S",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'liquid-yellow',
      state: 'reached-liquid',
      sequence: ["H", "H", "S", "O", "O", "O", "O"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    },
    {
      name: "Ethanol",
      formula: "CH3CH2OH",
      composition: [
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "C",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "H",
          electrons: 0,
          status: AtomStatus.UNPLACED
        },
        {
          name: "O",
          electrons: 4,
          status: AtomStatus.UNPLACED
        }
      ],
      level: 3,
      type: 'liquid-colorless',
      state: 'reached-liquid',
      sequence: ["C", "C", "H", "H", "H", "H", "H", "H", "O"],
      selectionOptions: ["Fe", "C", "O", "S","F", "C", "Br", "P", "H"]
    }
  ]; 

  export default compounds;