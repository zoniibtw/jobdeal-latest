import React from 'react';
import { useTranslation } from 'react-i18next';

const InvestorsPage: React.FC = () => {
  const { t } = useTranslation(['investors']);

  return (
    <div>
      <section className="text-white py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {/* Introduction Section */}
            <div className="space-y-4">
              <p className="text-gray-400">{t('investorsPage.introduction.greeting')}</p>
              {(t('investorsPage.introduction.paragraphs', { returnObjects: true }) as string[]).map(
                (paragraph: string, index: number) => (
                  <p key={index} className="text-gray-400">{paragraph}</p>
                )
              )}
            </div>

            {/* Market Opportunity Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('investorsPage.marketOpportunity.title')}</h3>
              <p className="text-gray-400">{t('investorsPage.marketOpportunity.introduction')}</p>
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.marketOpportunity.opportunities', { returnObjects: true }) as string[]).map(
                  (opportunity: string, index: number) => (
                    <li key={index}>{opportunity}</li>
                  )
                )}
              </ul>
              {(t('investorsPage.marketOpportunity.details', { returnObjects: true }) as string[]).map(
                (detail: string, index: number) => (
                  <p key={index} className="text-gray-400">{detail}</p>
                )
              )}
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.marketOpportunity.trends', { returnObjects: true }) as string[]).map(
                  (trend: string, index: number) => (
                    <li key={index}>{trend}</li>
                  )
                )}
              </ul>
              <p className="text-gray-400">{t('investorsPage.marketOpportunity.conclusion')}</p>
            </div>

            {/* Problems Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('investorsPage.problems.title')}</h3>
              <p className="text-gray-400">{t('investorsPage.problems.introduction')}</p>
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.problems.challenges', { returnObjects: true }) as string[]).map(
                  (challenge: string, index: number) => (
                    <li key={index}>{challenge}</li>
                  )
                )}
              </ul>
            </div>

            {/* Solutions Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('investorsPage.solutions.title')}</h3>
              <p className="text-gray-400">{t('investorsPage.solutions.introduction')}</p>
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.solutions.solutions', { returnObjects: true }) as string[]).map(
                  (solution: string, index: number) => (
                    <li key={index}>{solution}</li>
                  )
                )}
              </ul>
            </div>

            {/* Marketing Strategy Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('investorsPage.marketingStrategy.title')}</h3>
              <p className="text-gray-400">{t('investorsPage.marketingStrategy.introduction')}</p>
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.marketingStrategy.strategies', { returnObjects: true }) as string[]).map(
                  (strategy: string, index: number) => (
                    <li key={index}>{strategy}</li>
                  )
                )}
              </ul>
            </div>

            {/* Future Expansion Plans Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('investorsPage.futureExpansionPlans.title')}</h3>
              <p className="text-gray-400">{t('investorsPage.futureExpansionPlans.introduction')}</p>
              <ul className="list-disc list-inside text-gray-400">
                {(t('investorsPage.futureExpansionPlans.plans', { returnObjects: true }) as string[]).map(
                  (plan: string, index: number) => (
                    <li key={index}>{plan}</li>
                  )
                )}
              </ul>
              <p className="text-gray-400">{t('investorsPage.futureExpansionPlans.conclusion')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;