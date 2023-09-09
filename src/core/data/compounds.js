const compounds = [
    {
      name: "Sulfur Chloride",
      formula: "SCl2",
      composition: {
        S: {
          atoms: 1,
          electrons: 4
        },
        Cl: {
          atoms: 2,
          electrons: 6
        }
      },
      level: 1
    },
    {
      name: "Boron Trifluoride",
      formula: "BF3",
      composition: {
        B: {
          atoms: 1,
          electrons: 0
        },
        F: {
          atoms: 3,
          electrons: 6
        }
      },
      level: 1
    },
    {
      name: "Beryllium Hydride",
      formula: "BeH2",
      composition: {
        Be: {
          atoms: 1,
          electrons: 0
        },
        H: {
          atoms: 2,
          electrons: 0
        }
      },
      level: 1
    },
    {
      name: "Phosphorus Tribromide",
      formula: "PBr3",
      composition: {
        P: {
          atoms: 1,
          electrons: 2
        },
        Br: {
          atoms: 3,
          electrons: 6
        }
      },
      level: 1
    },
    {
      name: "Chlorine Monoxide",
      formula: "Cl2O",
      composition: {
        Cl: {
          atoms: 2,
          electrons: 6
        },
        O: {
          atoms: 1,
          electrons: 4
        }
      },
      level: 1
    },
    {
      name: "Xenon Tetrafluoride",
      formula: "XeF4",
      composition: {
        Xe: {
          atoms: 1,
          electrons: 4
        },
        F: {
          atoms: 4,
          electrons: 6
        }
      },
      level: 1
    },
    {
      name: "Chloroform",
      formula: "CHCl3",
      composition: {
        C: {
          atoms: 1,
          electrons: 0
        },
        H: {
          atoms: 1,
          electrons: 0
        },
        Cl: {
          atoms: 3,
          electrons: 6
        }
      },
      level: 2
    },
    {
      name: "Phosphorus Pentafluoride",
      formula: "PF5",
      composition: {
        P: {
          atoms: 1,
          electrons: 0
        },
        F: {
          atoms: 5,
          electrons: 6
        }
      },
      level: 2
    },
    {
      name: "Chloroethylene",
      formula: "C2HCl",
      composition: {
        C: {
          atoms: 2,
          electrons: 0
        },
        H: {
          atoms: 1,
          electrons: 0
        },
        Cl: {
          atoms: 1,
          electrons: 0
        }
      },
      level: 2
    },
    {
      name: "Cobalt Chloride",
      formula: "CoCl2",
      composition: {
        C: {
          atoms: 1,
          electrons: 0
        },
        O: {
          atoms: 1,
          electrons: 4
        },
        Cl: {
          atoms: 2,
          electrons: 6
        }
      },
      level: 2
    },
    {
      name: "Methyl Bromide",
      formula: "CH3Br",
      composition: {
        C: {
          atoms: 1,
          electrons: 0
        },
        H: {
          atoms: 3,
          electrons: 0
        },
        Br: {
          atoms: 1,
          electrons: 6
        }
      },
      level: 2
    },
    {
      name: "Dichlorodifluoromethane",
      formula: "CCl2F2",
      composition: {
        C: {
          atoms: 1,
          electrons: 0
        },
        Cl: {
          atoms: 2,
          electrons: 6
        },
        F: {
          atoms: 2,
          electrons: 6
        }
      },
      level: 2
    },
    {
      name: "Sulfur Hexafluoride",
      formula: "SF6",
      composition: {
        S: {
          atoms: 1,
          electrons: 0
        },
        F: {
          atoms: 6,
          electrons: 6
        }
      },
      level: 3
    },
    {
      name: "Dimethyl Ether",
      formula: "CH3OCH3",
      composition: {
        C: {
          atoms: 2,
          electrons: 0
        },
        H: {
          atoms: 6,
          electrons: 0
        },
        O: {
          atoms: 1,
          electrons: 0
        }
      },
      level: 3
    },
    {
      name: "Benzene",
      formula: "C6H6",
      composition: {
        C: {
          atoms: 6,
          electrons: 0
        },
        H: {
          atoms: 6,
          electrons: 0
        }
      },
      level: 3
    },
    {
      name: "Ethane",
      formula: "C2H6",
      composition: {
        C: {
          atoms: 2,
          electrons: 0
        },
        H: {
          atoms: 6,
          electrons: 0
        }
      },
      level: 3
    },
    {
      name: "Formic Acid",
      formula: "HCOOH",
      composition: {
        H: {
          atoms: 2,
          electrons: 0
        },
        C: {
          atoms: 1,
          electrons: 0
        },
        O: {
          atoms: 2,
          electrons: 4
        }
      },
      level: 3
    },
    {
      name: "Acetic Acid",
      formula: "CH3COOH",
      composition: {
        C: {
          atoms: 2,
          electrons: 0
        },
        H: {
          atoms: 4,
          electrons: 0
        },
        O: {
          atoms: 2,
          electrons: 4
        }
      },
      level: 3
    },
    {
      name: "Sulfuric Acid",
      formula: "H2SO4",
      composition: {
        H: {
          atoms: 2,
          electrons: 0
        },
        S: {
          atoms: 1,
          electrons: 0
        },
        O: {
          atoms: 4,
          electrons: 4
        }
      },
      level: 3
    },
    {
      name: "Ethanol",
      formula: "CH3CH2OH",
      composition: {
        C: {
          atoms: 2,
          electrons: 0
        },
        H: {
          atoms: 6,
          electrons: 0
        },
        O: {
          atoms: 1,
          electrons: 4
        }
      },
      level: 3
    }
  ]; 

  export default compounds;