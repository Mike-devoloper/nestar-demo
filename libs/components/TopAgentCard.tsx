import { Stack } from "@mui/material"

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
				<img src={"/img/profile/agent.png"} alt="" />

				<strong>Mike</strong>
				<span>AGENT</span>
			</Stack>
    )
}

export default TopAgentCard;