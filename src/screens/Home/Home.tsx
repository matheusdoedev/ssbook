import { FavoriteAuthors, FavoriteBooks, Library, TabMenu } from '@/components'
import { INTRO_TAB_MENU_OPTIONS } from '@/constants'
import { HomeScreenData } from '@/interfaces'

import './Home.styles.scss'

interface HomeScreenProps {
  data: HomeScreenData
}

export default function HomeScreen({ data }: HomeScreenProps) {
  const { favoriteAuthors, favoriteBooks, libraryBooks } = data

  return (
    <div data-testid="home">
      <TabMenu options={INTRO_TAB_MENU_OPTIONS} className="intro-tab-menu" />

      <FavoriteBooks
        favoriteBooks={favoriteBooks}
        className="home-favorite-books"
      />

      <div className="bottom-sections">
        <FavoriteAuthors favoriteAuthors={favoriteAuthors} />

        <Library libraryBooks={libraryBooks} />
      </div>
    </div>
  )
}
