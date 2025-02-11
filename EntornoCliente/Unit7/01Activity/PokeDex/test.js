Share


You said:
    class Pokemon {
        constructor(name, id, image, types, generation) {
            this.name = name;
            this.id = id;
            this.image = image;
            this.types = types;
            this.generation = generation;
        }

        displayInfo() {
            return
            <div class="pokemon-card">
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="${this.name}">
                    <p>Type: ${this.types.join(", ")}</p>
            </div>
        ;
        }
        }

        class Pokedex {
            constructor() {
                this.apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=2000";
                this.allPokemon = [];
            }

            async fetchAllPokemon() {
                try {
                    let response = await fetch(this.apiUrl);
                    let data = await response.json();
                    let pokemonList = data.results;

                    let pokemonDetails = await Promise.all(
                        pokemonList.map(async (pokemon) => {
                            let res = await fetch(pokemon.url);
                            let details = await res.json();

                            // Fetch generation info
                            let speciesRes = await fetch(details.species.url);
                            let speciesData = await speciesRes.json();
                            let generation = speciesData.generation.name;

                            return new Pokemon(
                                capitalize(details.name),
                                details.id,
                                details.sprites.other["official-artwork"].front_default,
                                details.types.map(t => capitalize(t.type.name)), // Capitalize types
                                generation
                            );
                        })
                    );

                    this.allPokemon = pokemonDetails;
                    this.displayAllPokemon(pokemonDetails);
                    this.populateFilters();
                } catch (error) {
                    console.error("Error fetching Pokémon:", error);
                }
            }

            displayAllPokemon(pokemonArray) {
                let pokedexDiv = document.getElementById("pokedex");
                pokedexDiv.innerHTML = pokemonArray.map(pokemon => pokemon.displayInfo()).join("");
            }

            populateFilters() {
                let typeFilter1 = document.getElementById("typeFilter1");
                let typeFilter2 = document.getElementById("typeFilter2");
                let generationFilter = document.getElementById("generationFilter");

                let allTypes = new Set();
                let allGenerations = new Set();

                // Generation mappings
                const generationMapping = {
                    "generation-i": "Gen I Kanto",
                    "generation-ii": "Gen II Johto",
                    "generation-iii": "Gen III Hoenn",
                    "generation-iv": "Gen IV Sinnoh",
                    "generation-v": "Gen V Unova",
                    "generation-vi": "Gen VI Kalos",
                    "generation-vii": "Gen VII Alola",
                    "generation-viii": "Gen VIII Galar",
                    "generation-ix": "Gen IX Paldea"
                };

                this.allPokemon.forEach(pokemon => {
                    pokemon.types.forEach(type => allTypes.add(type));
                    allGenerations.add(pokemon.generation);
                });

                // Populate Type Filters
                typeFilter1.innerHTML = <option value="">All Types</option>;
                typeFilter2.innerHTML = <option value="">All Types</option>;

                allTypes.forEach(type => {
                    let typeName = capitalize(type);
                    typeFilter1.innerHTML += <option value="${type}">${typeName}</option>;
                    typeFilter2.innerHTML += <option value="${type}">${typeName}</option>;
                });

                // Populate Generation Filter
                generationFilter.innerHTML = <option value="">All Gens</option>;
                allGenerations.forEach(gen => {
                    let displayName = generationMapping[gen] || gen; // Map the generation to the proper format
                    generationFilter.innerHTML += <option value="${gen}">${displayName}</option>;
                });
            }



            filterPokemon() {
                let searchValue = document.getElementById("search").value.toLowerCase();
                let selectedType1 = document.getElementById("typeFilter1").value;
                let selectedType2 = document.getElementById("typeFilter2").value;
                let selectedGen = document.getElementById("generationFilter").value;

                let filteredPokemon = this.allPokemon.filter(pokemon => {
                    let matchesSearch = searchValue === "" || pokemon.name.includes(searchValue) || pokemon.id.toString() === searchValue;
                    let matchesGen = selectedGen === "" || pokemon.generation === selectedGen;

                    // Check if the Pokémon has both types selected
                    let matchesBothTypes = (selectedType1 === "" || pokemon.types.includes(selectedType1)) &&
                        (selectedType2 === "" || pokemon.types.includes(selectedType2));

                    // Ensure both types are present in the Pokémon's types
                    return matchesSearch && matchesGen && matchesBothTypes;
                });

                this.displayAllPokemon(filteredPokemon);
            }


            resetFilters() {
                document.getElementById("search").value = "";
                document.getElementById("typeFilter1").value = "";
                document.getElementById("typeFilter2").value = "";
                document.getElementById("generationFilter").value = "";
                this.displayAllPokemon(this.allPokemon);
            }
        }

        let myPokedex = new Pokedex();

        function filterPokemon() {
            myPokedex.filterPokemon();
        }

        function resetFilters() {
            myPokedex.resetFilters();
        }

        // Load all Pokémon when page loads
        window.onload = () => {
            myPokedex.fetchAllPokemon();
        };

        document.getElementById('search').addEventListener('input', () => {
            filterPokemon();
        });

        document.getElementById('typeFilter1').addEventListener('change', () => {
            filterPokemon();
        });

        document.getElementById('typeFilter2').addEventListener('change', () => {
            filterPokemon();
        });

        document.getElementById('generationFilter').addEventListener('change', () => {
            filterPokemon();
        });

        document.getElementById('resetFilter').addEventListener('click', () => {
            resetFilters();
        });

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
