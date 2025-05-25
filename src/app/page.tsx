// File: /src/app/page.tsx
import Framework from './components/Framework';
import VoiceTone from './components/VoiceTone';
import Logo from './components/Logo';
import Typography from './components/Typography';
import Iconography from './components/Iconography';
import Color from './components/Color';
import DropboxIcon from './components/DropboxIcon';
import Imagery from './components/Imagery';
import Motion from './components/Motion';

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        <div className="row-span-2">
          <Framework />
        </div>
        <div className="col-span-2">
          <VoiceTone />
        </div>
        <Logo />
        <Typography />
        <Iconography />
        <div className="row-span-2">
          <Color />
        </div>
        <DropboxIcon />
        <div className="row-span-2 col-span-2">
          <Imagery />
        </div>
        <Motion />
      </div>
    </main>
  );
}