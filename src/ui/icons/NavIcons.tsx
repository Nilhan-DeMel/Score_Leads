import {
  Home,
  Target,
  BarChart3,
  UserCircle2,
  History,
  Sparkles,
  ChevronRight,
  MonitorOff,
  Globe,
  FileText,
  List,
  Share2,
  Download,
} from "lucide-react";

interface IconProps {
  size?: number;
  className?: string;
}

export function HomeIcon({ size = 24, className = "" }: IconProps) {
  return <Home size={size} className={className} />;
}

export function InputIcon({ size = 24, className = "" }: IconProps) {
  return <Target size={size} className={className} />;
}

export function ResultsIcon({ size = 24, className = "" }: IconProps) {
  return <BarChart3 size={size} className={className} />;
}

export function SparkleIcon({ size = 24, className = "" }: IconProps) {
  return <Sparkles size={size} className={className} />;
}

export function ChevronRightIcon({ size = 24, className = "" }: IconProps) {
  return <ChevronRight size={size} className={className} />;
}

export function EmptyStateIcon({ size = 64, className = "" }: IconProps) {
  return <MonitorOff size={size} className={className} />;
}

export function GlobeIcon({ size = 20, className = "" }: IconProps) {
  return <Globe size={size} className={className} />;
}

export function UserIcon({ size = 24, className = "" }: IconProps) {
  return <UserCircle2 size={size} className={className} />;
}

export function FileIcon({ size = 20, className = "" }: IconProps) {
  return <FileText size={size} className={className} />;
}

export function ListIcon({ size = 20, className = "" }: IconProps) {
  return <List size={size} className={className} />;
}

export function HistoryIcon({ size = 24, className = "" }: IconProps) {
  return <History size={size} className={className} />;
}

export function ShareIcon({ size = 20, className = "" }: IconProps) {
  return <Share2 size={size} className={className} />;
}

export function DownloadIcon({ size = 20, className = "" }: IconProps) {
  return <Download size={size} className={className} />;
}
