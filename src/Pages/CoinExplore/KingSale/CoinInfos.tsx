/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { DistributionChart } from 'src/Components/Chart/DistributionChart';
import { TokenChartInfo } from 'src/Components/Chart/DistributionChart/chart-info';
import { coinDataProps } from 'src/Constant/interface';

export const CoinInfos = (props: { data?: coinDataProps }) => {
  const { data } = props;
  return (
    <CoinInfosContainer>
      <CoinInfosBox>
        <CoinInfo name="Presale Address" value={data?.router} />
        <CoinInfo name="Token Name" value={data?.name} />
        <CoinInfo name="Token Symbol" value={data?.symbol} />
        <CoinInfo name="Token Decimals" value={data?.decimals} />
        <CoinInfo name="Token Address" value={data?.token_address} />
        <CoinInfo name="Total Supply" value={`${data?.total_supply ?? 0} SAND`} />
        <CoinInfo name="Liquidity Percent" value={`${data?.liquidity_percentage ?? 0}%`} />
        <CoinInfo name="Presale Start Time" value={`${data?.presale_start ?? 0} (UTC)`} />
        <CoinInfo name="Presale End Time" value={`${data?.presale_end ?? 0} (UTC)`} />
        <CoinInfo name="Presale Rate" value={`${data?.presale_rate ?? 0} `} />
        <CoinInfo name="Listing Rate" value={`${data?.listing_rate ?? 0} `} />
      </CoinInfosBox>
      <ContributionBox>
        <VestingCard>
          <CardLabel>Contribution Vesting</CardLabel>
          <VestingDetails>
            <VestingDetail value={data?.vesting_first_release_amount} unit="%" content="First release Amount" />
            <VestingDetail
              value={data?.vesting_period_each_cycle_days}
              unit="DAYS"
              content="Vesting period each cycle"
            />
            <VestingDetail
              value={data?.vesting_release_each_cycle_percentage}
              unit="%"
              content="Token release each cycle"
            />
          </VestingDetails>
        </VestingCard>
        <DistributionBox>
          <CardLabel>Distribution</CardLabel>
          <ChartContainer>
            <DistributionChart />
          </ChartContainer>
          <TokenChartInfo />
        </DistributionBox>
      </ContributionBox>
    </CoinInfosContainer>
  );
};

const CoinInfosContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '14px',
  paddingTop: '14px',
  [theme.breakpoints.down(1280)]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CoinInfosBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  padding: '35px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '18px'
}));

interface CoinInfoProps {
  name: string;
  value?: string | number;
}

const CoinInfo = (props: CoinInfoProps) => {
  return (
    <CoinInfoWrapper>
      <CoinInfoName>{props.name}</CoinInfoName>
      <CoinInfoValue>{props.value}</CoinInfoValue>
    </CoinInfoWrapper>
  );
};

const CoinInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowWrap: 'break-word'
}));

const CoinInfoName = styled(Box)(({ theme }) => ({
  color: '#8462F6',
  fontSize: '16px',
  fontWeight: '600',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '15px'
  }
}));

const CoinInfoValue = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '13px',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px'
  }
}));

const ContributionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%'
}));

const VestingCard = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  padding: '35px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const CardLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontWeight: '600'
}));

const VestingDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '38px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  [theme.breakpoints.down('mobile')]: {
    gap: '10px'
  }
}));

interface VestingDetailProps {
  value?: number;
  unit: string;
  content: string;
}

const VestingDetail = (props: VestingDetailProps) => {
  return (
    <VestingDetailWrapper>
      <CircleBox>
        <VestingValue>{props.value}</VestingValue>
        <VestingUnit>{props.unit}</VestingUnit>
      </CircleBox>
      <VestingContent>{props.content}</VestingContent>
    </VestingDetailWrapper>
  );
};

const VestingDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '90px',
  paddingTop: '30px',
  gap: '10px',
  alignItems: 'center'
}));

const CircleBox = styled(Box)(({ theme }) => ({
  border: theme.palette.mode === 'light' ? '3px solid #CDBEFF' : '3px solid #CDBEFF',
  width: '90px',
  height: '90px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px',
    width: '70px',
    height: '70px'
  }
}));

const VestingValue = styled(Box)(({ theme }) => ({
  fontSize: '35px',
  color: theme.palette.primary.contrastText,
  height: '45px',
  fontWeight: '600',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '22px',
    height: '30px'
  }
}));

const VestingUnit = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  height: '15px',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px'
  }
}));

const VestingContent = styled(Box)(({ theme }) => ({
  fontSize: '11px',
  color: theme.palette.primary.contrastText,
  textAlign: 'center'
}));

const DistributionBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  height: '100%',
  padding: '35px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px'
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  marginTop: '-40px',
  width: '400px',
  height: '400px',
  [theme.breakpoints.down(1390)]: {
    width: '350px',
    height: '350px'
  },
  [theme.breakpoints.down(1280)]: {
    width: '450px',
    height: '450px'
  },
  [theme.breakpoints.down('mobile')]: {
    width: '350px',
    height: '350px'
  },
  [theme.breakpoints.down(370)]: {
    width: '300px',
    height: '300px'
  }
}));
