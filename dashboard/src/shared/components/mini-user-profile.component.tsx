interface Props {
  displayDirection: "row" | "col";
  profilePicture: string;
  name: string;
  position: string;
}

export function MiniUserProfileComponent({
  displayDirection = "col",
  name,
  position,
  profilePicture,
}: Props) {
  return (
    <div
      class={`flex flex-${displayDirection} items-center justify-center gap-${
        displayDirection === "col" ? "4" : "2"
      }`}
    >
      <img
        src={profilePicture}
        alt={`${name}'s profile picture`}
        width={64}
        height={64}
        class="rounded-full object-cover object-center"
      />

      <div
        class={`flex flex-col items-${
          displayDirection === "col" ? "center" : "start"
        } justify-center gap-2`}
      >
        <p class="font-bold text-xl">{name}</p>
        <p class="text-base text-gray-400">{position}</p>
      </div>
    </div>
  );
}
