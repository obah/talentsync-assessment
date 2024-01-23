import { Icons } from "../components/icons";
import { WhyUsItemProps } from "../components/landing-page/why-us-section";

export const why_us_items: WhyUsItemProps[] = [
  {
    title: "Crystal-clear HD video",
    description:
      "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    icon: { path: Icons.VideoRecorder },
  },
  {
    title: "Noise-canceling audio",
    description:
      "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    icon: { path: Icons.Recording },
  },
  {
    title: "Scheduling made easy",
    description:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    icon: { path: Icons.Calendar },
  },
  {
    title: "Bank-grade security",
    description:
      "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    icon: { path: Icons.LockUnlocked },
  },
];
