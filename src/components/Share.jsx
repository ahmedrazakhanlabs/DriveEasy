import { Send, Link2, QrCode } from "lucide-react";
import { useState } from "react";

export default function ShareMenu({ shareUrl }) {
  const [qrCodeVisible, setQrCodeVisible] = useState(false); // Track QR code visibility

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Profile",
          url: shareUrl,
        });
      } catch (error) {
        toast({
          title: "Error sharing",
          description: "Could not share the profile",
        });
      }
    } else {
      toast({
        title: "Sharing not supported",
        description: "Your browser doesn't support native sharing",
      });
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied",
        description: "Profile link copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error copying",
        description: "Could not copy the link",
      });
    }
  };

  const showQRCode = () => {
    setQrCodeVisible(true);
    toast({
      title: "QR Code",
      description: "QR code functionality would be implemented here",
    });
  };

  return (
    <div className="flex items-center justify-center gap-8 p-4">
      {/* Share Button */}
      <div className="flex flex-col items-center gap-2">
        <button
          className="h-16 w-16 rounded-full bg-gray-800 flex justify-center items-center"
          onClick={handleShare}
        >
          <Send className="h-6 w-6 text-white" />
        </button>
        <span className="text-sm text-muted-foreground font-Monsterrat text-gray-900 font-bold">
          Share profile
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          className="h-16 w-16 rounded-full bg-gray-800 flex justify-center items-center"
          onClick={copyLink}
        >
          <Link2 className="h-6 w-6 text-white" />
        </button>
        <span className="text-sm text-muted-foreground font-Monsterrat text-gray-900 font-bold">
          Copy link
        </span>
      </div>

      {/* QR Code button */}
      <div className="flex flex-col items-center gap-2">
        <button
          className="h-16 w-16 rounded-full bg-gray-800 flex justify-center items-center"
          onClick={showQRCode}
        >
          <QrCode className="h-6 w-6 text-white" />
        </button>

        <span className="text-sm text-muted-foreground font-Monsterrat text-gray-900 font-bold">
          QR code
        </span>
      </div>
    </div>
  );
}
