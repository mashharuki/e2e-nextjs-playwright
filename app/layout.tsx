import '../styles/globals.css'
import MonitorSession from './components/monitor-session'
import NavBar from './components/nav-bar'
import Provider from './provider'

/**
 * ルートレイアウトコンポーネント
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Provider>
          <MonitorSession />
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
