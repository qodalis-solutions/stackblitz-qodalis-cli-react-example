import { Cli, CliConfigProvider, CliPanel } from '@qodalis/react-cli';
import '@qodalis/cli/assets/cli-panel.css';
import { guidModule } from '@qodalis/cli-guid';
import { filesModule } from '@qodalis/cli-files';
import { usersModule } from '@qodalis/cli-users';
import type { CliOptions, ICliModule } from '@qodalis/cli-core';

const modules: ICliModule[] = [
    guidModule,
    filesModule,
    usersModule,
];

const options: CliOptions = {};

function App() {
    return (
        <CliConfigProvider modules={modules} options={options}>
            <div style={windowStyle}>
                <div style={titlebarStyle}>
                    <span style={{ ...dotStyle, background: '#ff5f57' }} />
                    <span style={{ ...dotStyle, background: '#febc2e' }} />
                    <span style={{ ...dotStyle, background: '#28c840' }} />
                    <span style={titleStyle}>qodalis-cli</span>
                </div>
                <div style={bodyStyle}>
                    <Cli />
                </div>
            </div>
            <CliPanel />
        </CliConfigProvider>
    );
}

const windowStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: 24,
    boxSizing: 'border-box',
};

const titlebarStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    background: '#1c1f2b',
    borderBottom: '1px solid #2a2f3a',
    borderRadius: '10px 10px 0 0',
    flexShrink: 0,
};

const dotStyle: React.CSSProperties = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    display: 'inline-block',
};

const titleStyle: React.CSSProperties = {
    marginLeft: 8,
    fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.45)',
};

const bodyStyle: React.CSSProperties = {
    flex: 1,
    minHeight: 0,
    background: '#000',
    borderRadius: '0 0 10px 10px',
    overflow: 'hidden',
    border: '1px solid #2a2f3a',
    borderTop: 'none',
};

export default App;
