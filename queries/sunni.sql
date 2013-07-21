(select 
	OGC_FID,
	GEOMETRY,
	district,
	sunni_2005,
	sunni_2009,
	sunni_2012,
	pct_sunni_2005,
	pct_sunni_2009,
	pct_sunni_2012,
	 -- change in share of electorate 
	( pct_sunni_2009 - pct_sunni_2005 ) as chg_sunni_2009,
	( pct_sunni_2012 - pct_sunni_2009 ) as chg_sunni_2012,
	-- abs() for text + marker sizes
	abs( pct_sunni_2009 - pct_sunni_2005 ) as chg_sunni_2009_a,
	abs( pct_sunni_2012 - pct_sunni_2009 ) as chg_sunni_2012_a,
	-- easier to read colums for cartography + tooltips
	cast(round((pct_sunni_2009 - pct_sunni_2005),2) as text)||'%' as chg_sunni_2009_c,
	cast(round((pct_sunni_2012 - pct_sunni_2009),2) as text)||'%' as chg_sunni_2012_c,
	--integer  percentages
	cast (cast(round(pct_sunni_2005) as integer) as  text)||'%' as pct_sunni_2005_i,
	cast (cast(round(pct_sunni_2009) as integer) as  text)||'%' as pct_sunni_2009_i,
	cast (cast(round(pct_sunni_2012) as integer) as  text)||'%' as pct_sunni_2012_i,
	--total votes 
	total_2005,
	total_2009,
	total_2012
from  (
	select
		OGC_FID,
		GEOMETRY,
		district,
		sunni_2005,
		sunni_2009,
		sunni_2012,
		total_2005,
		total_2009,
		total_2012,
		-- calculate percent of electorate by election by year
		( cast(sunni_2005 as float) * 100 / cast(total_2005 as float) ) as pct_sunni_2005, 
		( cast(sunni_2009 as float) * 100 / cast(total_2009 as float) ) as pct_sunni_2009,
		( cast(sunni_2012 as float) * 100 / cast(total_2012 as float) ) as pct_sunni_2012
	from ( select
			*,
			-- calculate total number of votes for each year
			(sunni_2005 + alawite_2005 + shia_2005 + druze_2005 + grkorth_2005 + maronite_2005 + grkcth_2005 + evang_2005 + minorities_2005 + armorth_2005 + armcth_2005) as total_2005,
			(sunni_2009 + alawite_2009 + shia_2009 + druze_2009 + grkorth_2009 + maronite_2009 + grkcth_2009 + evang_2009 + minorities_2009 + armorth + armcth_2009) as total_2009,
			(sunni_2012 + alawite_2012 + shia_2012 + druze_2012 + grkorth_2012 + maronite_2012 + grkcth_2012 + evang_2012 + minorities_2012 + armorth_2012 + armcth_2012) as total_2012
		 from conf_shape
	) as a
) as b
) as data
