// Graph data extracted from markdown files
const graphData = {
  nodes: [
    { id: "MOC — NPI Process", type: "MOC", category: "NPI" },
    { id: "MOC — Digital Systems", type: "MOC", category: "Digital Systems" },
    { id: "Aerospace NPI Process Overview", type: "concept", category: "NPI" },
    { id: "Design Reviews — PDR CDR TRR", type: "concept", category: "NPI" },
    { id: "PPAP in Aerospace — AS9145", type: "concept", category: "NPI" },
    { id: "First Article Inspection — FAI and FAIR AS9102B", type: "concept", category: "NPI" },
    { id: "Configuration Management Basics", type: "concept", category: "NPI" },
    { id: "AS9100D NPI Clauses", type: "concept", category: "Quality" },
    { id: "PFMEA and DFMEA", type: "concept", category: "Quality" }
  ],
  links: [
    // Aerospace NPI Process Overview connections
    { source: "Aerospace NPI Process Overview", target: "MOC — NPI Process" },
    { source: "Aerospace NPI Process Overview", target: "Design Reviews — PDR CDR TRR" },
    { source: "Aerospace NPI Process Overview", target: "PPAP in Aerospace — AS9145" },
    { source: "Aerospace NPI Process Overview", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "Aerospace NPI Process Overview", target: "Configuration Management Basics" },
    { source: "Aerospace NPI Process Overview", target: "AS9100D NPI Clauses" },
    { source: "Aerospace NPI Process Overview", target: "MOC — Digital Systems" },

    // AS9100D connections
    { source: "AS9100D NPI Clauses", target: "MOC — NPI Process" },
    { source: "AS9100D NPI Clauses", target: "Design Reviews — PDR CDR TRR" },
    { source: "AS9100D NPI Clauses", target: "PFMEA and DFMEA" },
    { source: "AS9100D NPI Clauses", target: "Configuration Management Basics" },
    { source: "AS9100D NPI Clauses", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "AS9100D NPI Clauses", target: "PPAP in Aerospace — AS9145" },

    // Configuration Management connections
    { source: "Configuration Management Basics", target: "MOC — NPI Process" },
    { source: "Configuration Management Basics", target: "Aerospace NPI Process Overview" },
    { source: "Configuration Management Basics", target: "Design Reviews — PDR CDR TRR" },
    { source: "Configuration Management Basics", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "Configuration Management Basics", target: "AS9100D NPI Clauses" },
    { source: "Configuration Management Basics", target: "MOC — Digital Systems" },

    // Design Reviews connections
    { source: "Design Reviews — PDR CDR TRR", target: "MOC — NPI Process" },
    { source: "Design Reviews — PDR CDR TRR", target: "Aerospace NPI Process Overview" },
    { source: "Design Reviews — PDR CDR TRR", target: "PFMEA and DFMEA" },
    { source: "Design Reviews — PDR CDR TRR", target: "Configuration Management Basics" },
    { source: "Design Reviews — PDR CDR TRR", target: "AS9100D NPI Clauses" },

    // PFMEA/DFMEA connections
    { source: "PFMEA and DFMEA", target: "Design Reviews — PDR CDR TRR" },
    { source: "PFMEA and DFMEA", target: "AS9100D NPI Clauses" },

    // FAI connections
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "MOC — NPI Process" },
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "Configuration Management Basics" },
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "AS9100D NPI Clauses" },

    // PPAP connections
    { source: "PPAP in Aerospace — AS9145", target: "MOC — NPI Process" },
    { source: "PPAP in Aerospace — AS9145", target: "AS9100D NPI Clauses" }
  ]
};
