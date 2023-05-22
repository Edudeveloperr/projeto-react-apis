import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import Next from "../../img/pag-set/front.png"
import Back from "../../img/pag-set/back.png"

export function PokemonListPage() {
    const context = useContext(GlobalContext)

    return (
        <>
            <Header />
            <s.Container>
                <s.Title>Todos Pokémons</s.Title>
                
                <s.ContainerCard>
                    {
                        context.pokemons.filter(pokemon => !pokemon.isPokedex)
                            .map((pokemon) => {
                                return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                            })
                    }
                </s.ContainerCard>
                <s.ImgArrowBack src={Back} alt="seta-back" onClick={context.backPage}/>
                <s.ImgArrowNext src={Next} alt="seta-front" onClick={context.nextPage} />
            </s.Container>
        </>
    )
}