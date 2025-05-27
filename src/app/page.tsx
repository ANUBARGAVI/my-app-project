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
    <main className="min-h-screen bg-white p-4">
      <div className="flex flex-wrap justify-start gap-4">

        {/* First row components: 1–4 */}
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Framework />
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <VoiceTone />
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Logo />
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Typography />
        </div>

        {/* Second row components: 5–8 */}
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Iconography />
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%] relative">
          <Color />
          <div className="absolute bottom-2 right-2">
            <DropboxIcon />
          </div>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Imagery />
        </div>
        <div className="w-full sm:w-[48%] lg:w-[23%]">
          <Motion />
        </div>

      </div>
    </main>
  );
}
