(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{230:function(t,a,s){t.exports=s.p+"assets/img/bigquery-schema.bd14abfc.png"},231:function(t,a,s){t.exports=s.p+"assets/img/bigquery-preview.4c191e7d.png"},232:function(t,a,s){t.exports=s.p+"assets/img/aws-redshift-cluster-endpoint.bc9d3903.png"},345:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("This tutorial will show you how to install the Python libraries for working with Tabular Data Packages and demonstrate a very simple example of loading a Tabular Data Package from the web and pushing it directly into a local SQL database. Short examples of pushing your dataset to Google’s BigQuery and Amazon’s RedShift follow.")]),t._v(" "),n("h2",{attrs:{id:"setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),n("p",[t._v("For this tutorial, we will need the main Python Data Package library:")]),t._v(" "),n("p",[t._v("<"),n("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/"),n("OutboundLink")],1),t._v("    /datapackage-py>")]),t._v(" "),n("p",[t._v("You can install it as follows:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" datapackage\n")])])]),n("h2",{attrs:{id:"reading-basic-metadata"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reading-basic-metadata"}},[t._v("#")]),t._v(" Reading Basic Metadata")]),t._v(" "),n("p",[t._v("In this case, we are using an example Tabular Data Package containing"),n("br"),t._v("\nthe periodic table stored on"),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),n("OutboundLink")],1),n("br"),t._v("\n("),n("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.json"),n("OutboundLink")],1),t._v(","),n("br"),t._v(" "),n("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("data.csv"),n("OutboundLink")],1),t._v(")."),n("br"),t._v("\nThis dataset includes the atomic number, symbol, element name, atomic"),n("br"),t._v("\nmass, and the metallicity of the element.  Here are the first five"),n("br"),t._v("\nrows:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("atomic number")]),t._v(" "),n("th",[t._v("symbol")]),t._v(" "),n("th",[t._v("name")]),t._v(" "),n("th",[t._v("atomic mass")]),t._v(" "),n("th",[t._v("metal or nonmetal?")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("H")]),t._v(" "),n("td",[t._v("Hydrogen")]),t._v(" "),n("td",[t._v("1.00794")]),t._v(" "),n("td",[t._v("nonmetal")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("He")]),t._v(" "),n("td",[t._v("Helium")]),t._v(" "),n("td",[t._v("4.002602")]),t._v(" "),n("td",[t._v("noble gas")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("Li")]),t._v(" "),n("td",[t._v("Lithium")]),t._v(" "),n("td",[t._v("6.941")]),t._v(" "),n("td",[t._v("alkali metal")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("Be")]),t._v(" "),n("td",[t._v("Beryllium")]),t._v(" "),n("td",[t._v("9.012182")]),t._v(" "),n("td",[t._v("alkaline earth metal")])]),t._v(" "),n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("B")]),t._v(" "),n("td",[t._v("Boron")]),t._v(" "),n("td",[t._v("10.811")]),t._v(" "),n("td",[t._v("metalloid")])])])]),t._v(" "),n("p",[t._v("You can start using the library by importing "),n("code",[t._v("datapackage")]),t._v(".  Data"),n("br"),t._v("\nPackages can be loaded either from a local path or directly from the"),n("br"),t._v("\nweb.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\nurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json'")]),t._v("\ndp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("At the most basic level, Data Packages provide a standardized format"),n("br"),t._v("\nfor general metadata (for example, the dataset title, source, author,"),n("br"),t._v("\nand/or description) about your dataset.  Now that you have loaded this"),n("br"),t._v("\nData Package, you have access to this metadata using the "),n("code",[t._v("metadata")]),n("br"),t._v("\ndict attribute.  Note that these fields are optional and may not be"),n("br"),t._v("\nspecified for all Data Packages.  For more information on which fields"),n("br"),t._v("\nare supported, see"),n("br"),t._v("\n[the full Data Package standard][spec-dp].")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Periodic Table"')]),t._v("\n")])])]),n("h2",{attrs:{id:"reading-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reading-data"}},[t._v("#")]),t._v(" Reading Data")]),t._v(" "),n("p",[t._v("Now that you have loaded your Data Package, you can read its data.  A"),n("br"),t._v("\nData Package can contain multiple files which are accessible via the"),n("br"),t._v(" "),n("code",[t._v("resources")]),t._v(" attribute.  The "),n("code",[t._v("resources")]),t._v(" attribute is an array of"),n("br"),t._v("\nobjects containing information (e.g. path, schema, description) about"),n("br"),t._v("\neach file in the package.")]),t._v(" "),n("p",[t._v("You can access the data in a given resource in the "),n("code",[t._v("resources")]),t._v(" array"),n("br"),t._v("\nby reading the "),n("code",[t._v("data")]),t._v(" attribute.  For example, using our our Periodic"),n("br"),t._v("\nTable Data Package, we can return all elements with an atomic number"),n("br"),t._v("\nof less than 10 by doing the following:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Beryllium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Boron'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Carbon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nitrogen'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Oxygen'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fluorine'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("If you don’t want to load all data in memory at once, you can lazily"),n("br"),t._v("\naccess the data using the "),n("code",[t._v("iter()")]),t._v(" method on the resource:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("rows "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonmetal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.00794'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'noble gas'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'He'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.002602'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alkali metal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Li'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6.941'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"loading-into-an-sql-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-an-sql-database"}},[t._v("#")]),t._v(" Loading into an SQL database")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[t._v("Tabular Data Packages")]),t._v(" contains schema information about its"),n("br"),t._v("\ndata using "),n("router-link",{attrs:{to:"/specs/table-schema/"}},[t._v("Table Schema")]),t._v(". This means you can easily import"),n("br"),t._v("\nyour Data Package into the SQL backend of your choice. In this case,"),n("br"),t._v("\nwe are creating an "),n("a",{attrs:{href:"http://sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLite"),n("OutboundLink")],1),t._v(" database in a new file"),n("br"),t._v("\nnamed "),n("code",[t._v("datapackage.db")]),t._v(".")],1),t._v(" "),n("p",[t._v("To load the data into SQL we will need the Table Schema SQL Storage library:")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-sql-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-sql-py"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("You can install it by doing:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-sql\n")])])]),n("p",[t._v("Now you can load your data as follows:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to SQL")]),t._v("\nengine "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sqlite:///periodic-table-datapackage.db'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("One way to check if your data has been saved successfully is by running")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Alternatively, if you have "),n("code",[t._v("sqlite3")]),t._v(" installed, you can inspect and play with your"),n("br"),t._v("\nnewly created database.  Note that column type information has been"),n("br"),t._v("\ntranslated from the Table Schema format to native SQLite types:")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[t._v("$ sqlite3 periodic"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("datapackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db\nSQLite version "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.19")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v("\nEnter "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usage")]),t._v(" hints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*check database schema*/")]),t._v("\n\nsqlite"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("schema")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic number"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsymbol "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tname "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic mass"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metal or nonmetal?"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*view all records in the data table*/")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"loading-into-bigquery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-bigquery"}},[t._v("#")]),t._v(" Loading into BigQuery")]),t._v(" "),n("p",[t._v("Loading into BigQuery requires some setup on Google’s infrastructure,"),n("br"),t._v("\nbut once that is completed, loading data can be just as frictionless."),n("br"),t._v("\nHere are the steps to follow:")]),t._v(" "),n("ol",[n("li",[t._v("Create a new project - "),n("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Create a new service account key - "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Download credentials as JSON and save as "),n("code",[t._v(".credentials.json")])]),t._v(" "),n("li",[t._v("Create dataset for your project - "),n("a",{attrs:{href:"https://bigquery.cloud.google.com/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1),t._v(" (e.g. “dataset”)")])]),t._v(" "),n("p",[t._v("To load the data into BigQuery using Python, we will need the Table Schema BigQuery Storage library:")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("You can install it as follows:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-bigquery\n")])])]),n("p",[t._v("The code snippet below should be enough to push your dataset into the cloud!")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableschema "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Table\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" apiclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discovery "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" build\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" oauth2client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GoogleCredentials\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prepare BigQuery credentials")]),t._v("\nos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GOOGLE_APPLICATION_CREDENTIALS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dp-py/credentials.json'")]),t._v("\ncredentials "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GoogleCredentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_application_default"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nservice "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentials"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credentials.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to BigQuery")]),t._v("\ntable "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storage"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" project"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dataset'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("If everything is in place, you should now be able to inspect your"),n("br"),t._v("\ndataset on BigQuery.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(230),alt:"BigQuery Schema"}})]),t._v(" "),n("p",[n("img",{attrs:{src:s(231),alt:"BigQuery Preview"}})]),t._v(" "),n("h2",{attrs:{id:"loading-into-amazon-redshift"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-amazon-redshift"}},[t._v("#")]),t._v(" Loading into Amazon RedShift")]),t._v(" "),n("p",[t._v("Similar to Google’s BigQuery, Amazon RedShift requires"),n("br"),t._v(" "),n("a",{attrs:{href:"http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("some setup"),n("OutboundLink")],1),n("br"),t._v("\non AWS. Once you’ve created your cluster, however, all you need to do"),n("br"),t._v("\nis use your cluster endpoint to create a connection string for"),n("br"),t._v("\nSQLAlchemy.")]),t._v(" "),n("p",[t._v("! Note: using the "),n("a",{attrs:{href:"https://sqlalchemy-redshift.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlalchemy-redshift dialect"),n("OutboundLink")],1),n("br"),t._v("\nis optional as the "),n("code",[t._v("postgres://")]),t._v(" dialect is sufficient to load your"),n("br"),t._v("\ntable into AWS RedShift.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(232),alt:"AWS RedShift"}})]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\nREDSHIFT_URL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres://<user>:<pass>@<host>.redshift.amazonaws.com:5439/<database>'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# load and save table to RedShift")]),t._v("\nengine "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REDSHIFT_URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check if data has been saved successfully")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);