/**
* ClaimCenter AI Integration Demo
* Seamlessly integrates AI processing into authentic ClaimCenter interface
*/

class ClaimCenterAIDemo {
   constructor() {
       this.isProcessing = false;
       this.completedSteps = [];
       this.originalValues = {
           complexityScore: '2.5',
           grossIncurred: '$16,400.00',
           reserveAmount: '$0.00',
           description: 'Insured hit other party\'s car on the front passenger side while making turn'
       };
       
       this.aiResults = {
           complexityScore: '9.1',
           grossIncurred: '$612,500.00',
           reserveAmount: '$612,500.00',
           description: 'CRITICAL: T-bone collision - 69yr unconscious diabetic driver, 8yr minor facial trauma, 67yr elderly passenger. Multi-generational family claim with surgical requirements.',
           riskIndicators: [
               '⚠️ Minor Involvement - Plastic Surgery Required',
               '🔍 Elderly Unconscious - Cardiac Risk',
               '📋 Family Dynamics - Legal Representation Likely'
           ],
           routing: 'Jennifer Torres - Senior BI Specialist + Minor Certified',
           patterns: '3 similar cases: $340K-$890K range, 16-22 month timeline, 91% reserve increase probability',
           reserves: 'Traditional: $115K | AI-Enhanced: $612.5K | Confidence: 84%'
       };
       
       this.init();
   }

   init() {
       this.bindEvents();
       this.setupInitialState();
   }

   bindEvents() {
       // Main AI Analysis button
       document.getElementById('aiAnalyzeBtn').addEventListener('click', () => this.showAIProcessing());
       
       // Step buttons
       document.getElementById('btn-step1').addEventListener('click', () => this.runStep1());
       document.getElementById('btn-step2').addEventListener('click', () => this.runStep2());
       document.getElementById('btn-step3').addEventListener('click', () => this.runStep3());
       document.getElementById('btn-step4').addEventListener('click', () => this.runStep4());
       
       // Modal controls
       document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
       document.getElementById('aiModal').addEventListener('click', (e) => {
           if (e.target.id === 'aiModal') this.closeModal();
       });
   }

   setupInitialState() {
       // Set initial values
       document.getElementById('complexityScore').textContent = this.originalValues.complexityScore;
       document.getElementById('grossIncurred').textContent = this.originalValues.grossIncurred;
       document.getElementById('reserveAmount').textContent = this.originalValues.reserveAmount;
       document.getElementById('claimDescription').textContent = this.originalValues.description;
   }

   showAIProcessing() {
       document.getElementById('aiProcessingSection').style.display = 'block';
       document.getElementById('aiProcessingSection').scrollIntoView({ behavior: 'smooth' });
   }

   async runStep1() {
       if (this.isProcessing) return;
       
       this.isProcessing = true;
       this.updateStepButton('btn-step1', 'processing', 'Processing Documents...');
       this.updateStepStatus('step1', 'processing');
       
       // Simulate document processing
       await this.delay(3000);
       
       // Complete step 1
       this.completeStep(1);
       this.updateStepButton('btn-step1', 'complete', 'Documents Complete');
       this.updateStepStatus('step1', 'complete');
       this.enableStep(2);
       
       // Show first AI insights
       this.updateComplexityChart('6.5');
       this.showModalResult('Document Analysis Complete', this.createDocumentAnalysisResult());
       
       this.isProcessing = false;
   }

   async runStep2() {
       if (this.isProcessing) return;
       
       this.isProcessing = true;
       this.updateStepButton('btn-step2', 'processing', 'Processing Routing...');
       this.updateStepStatus('step2', 'processing');
       
       await this.delay(2000);
       
       this.completeStep(2);
       this.updateStepButton('btn-step2', 'complete', 'Routing Complete');
       this.updateStepStatus('step2', 'complete');
       this.enableStep(3);
       
       // Show routing results
       this.showModalResult('Intelligent Routing Complete', this.createRoutingResult());
       
       this.isProcessing = false;
   }

   async runStep3() {
       if (this.isProcessing) return;
       
       this.isProcessing = true;
       this.updateStepButton('btn-step3', 'processing', 'Analyzing Patterns...');
       this.updateStepStatus('step3', 'processing');
       
       await this.delay(3500);
       
       this.completeStep(3);
       this.updateStepButton('btn-step3', 'complete', 'Analysis Complete');
       this.updateStepStatus('step3', 'complete');
       this.enableStep(4);
       
       // Update complexity and show patterns
       this.updateComplexityChart('8.7');
       this.showModalResult('Pattern Analysis Complete', this.createPatternAnalysisResult());
       
       this.isProcessing = false;
   }

   async runStep4() {
       if (this.isProcessing) return;
       
       this.isProcessing = true;
       this.updateStepButton('btn-step4', 'processing', 'Calculating Reserves...');
       this.updateStepStatus('step4', 'processing');
       
       await this.delay(2500);
       
       this.completeStep(4);
       this.updateStepButton('btn-step4', 'complete', 'Reserves Complete');
       this.updateStepStatus('step4', 'complete');
       
       // Apply all AI enhancements to the claim
       this.applyAIEnhancements();
       this.showModalResult('AI Analysis Complete', this.createFinalResult());
       
       this.isProcessing = false;
   }

   applyAIEnhancements() {
       // Update main claim summary with AI results
       document.getElementById('complexityScore').textContent = this.aiResults.complexityScore;
       document.getElementById('grossIncurred').textContent = this.aiResults.grossIncurred;
       document.getElementById('reserveAmount').textContent = this.aiResults.reserveAmount;
       document.getElementById('claimDescription').textContent = this.aiResults.description;
       
       // Update complexity chart color to critical
       const chart = document.getElementById('complexityChart');
       chart.style.background = 'conic-gradient(var(--cc-red) 91%, var(--cc-gray-lighter) 91%)';
       
       // Update risk indicators
       const riskIndicators = document.getElementById('riskIndicators');
       riskIndicators.innerHTML = this.aiResults.riskIndicators.map(indicator => 
           `<div class="risk-item active">${indicator}</div>`
       ).join('');
       
       // Update litigation risk in exposures table
       document.getElementById('litigationRisk1').textContent = 'CRITICAL';
       document.getElementById('litigationRisk1').className = 'risk-indicator high';
       document.getElementById('litigationRisk1').style.background = 'rgba(220, 53, 69, 0.2)';
       document.getElementById('litigationRisk1').style.color = 'var(--cc-red)';
       document.getElementById('litigationRisk1').style.fontWeight = '600';
   }

   createDocumentAnalysisResult() {
       return `
           <div class="analysis-result">
               <h4>📊 Complexity Assessment: 6.5/10 → 9.1/10 CRITICAL</h4>
               <div class="result-grid">
                   <div class="result-item">
                       <strong>Documents Processed:</strong> 4 Complete
                       <ul>
                           <li>FNOL Intake Form - Family dynamics identified</li>
                           <li>Police Report - High-speed collision, unconscious driver</li>
                           <li>Medical Records - Minor facial trauma, elderly diabetic</li>
                           <li>Damage Photos - Extensive Tesla Model S damage</li>
                       </ul>
                   </div>
                   <div class="result-item">
                       <strong>Critical Findings:</strong>
                       <ul>
                           <li>🔴 Minor involvement (8-year-old Sofia) - facial lacerations</li>
                           <li>🔴 Elderly unconscious driver (69-year-old Roberto) - diabetic</li>
                           <li>🔴 Multi-generational family unit - complex dynamics</li>
                           <li>🔴 High-speed impact - 55mph in 35mph zone</li>
                       </ul>
                   </div>
               </div>
           </div>
       `;
   }

   createRoutingResult() {
       return `
           <div class="analysis-result">
               <h4>👤 Optimal Adjuster Assignment</h4>
               <div class="result-grid">
                   <div class="result-item">
                       <strong>Assigned: Jennifer Torres</strong>
                       <ul>
                           <li>Match Score: 9.6/10 (Optimal)</li>
                           <li>Senior BI Specialist (15 years experience)</li>
                           <li>Minor Certification: ✓ Qualified</li>
                           <li>Facial Trauma Expertise: ✓ Expert Level</li>
                           <li>Family Dynamics: ✓ Extensive Experience</li>
                       </ul>
                   </div>
                   <div class="result-item">
                       <strong>Case Brief:</strong>
                       <em>"URGENT: Martinez family T-bone collision. 8yr Sofia facial lacerations requiring plastic surgery consultation. 69yr Roberto unconscious/diabetic - monitor cardiac complications. 67yr Maria neck/back trauma. Expect family attorney involvement within 90 days. Document minor consent procedures immediately."</em>
                   </div>
               </div>
           </div>
       `;
   }

   createPatternAnalysisResult() {
       return `
           <div class="analysis-result">
               <h4>🔍 Historical Pattern Analysis</h4>
               <div class="result-grid">
                   <div class="result-item">
                       <strong>Similar Cases Found: 3 High-Confidence Matches</strong>
                       <table class="result-table">
                           <tr>
                               <th>Case Reference</th>
                               <th>Similarity</th>
                               <th>Final Payout</th>
                               <th>Duration</th>
                           </tr>
                           <tr>
                               <td>2023 Minor-facial-elderly-family</td>
                               <td>94%</td>
                               <td>$890,000</td>
                               <td>22 months</td>
                           </tr>
                           <tr>
                               <td>2024 Unconscious-elderly-diabetic</td>
                               <td>89%</td>
                               <td>$340,000</td>
                               <td>16 months</td>
                           </tr>
                           <tr>
                               <td>2022 Facial-scarring-minor</td>
                               <td>86%</td>
                               <td>$485,000</td>
                               <td>19 months</td>
                           </tr>
                       </table>
                   </div>
                   <div class="result-item">
                       <strong>Predictive Factors:</strong>
                       <ul>
                           <li>91% probability of multiple reserve increases</li>
                           <li>76% probability of legal representation within 90 days</li>
                           <li>88% probability of plastic surgery requirements</li>
                           <li>65% probability of cardiac complications (elderly diabetic)</li>
                       </ul>
                       <strong>Expected Range:</strong> $380K - $950K<br>
                       <strong>Timeline Forecast:</strong> 18-24 months
                   </div>
               </div>
           </div>
       `;
   }

   createFinalResult() {
       return `
           <div class="analysis-result">
               <h4>🎯 AI Analysis Complete - Claim Enhanced</h4>
               <div class="result-grid">
                   <div class="result-item">
                       <strong>Reserve Comparison:</strong>
                       <table class="result-table">
                           <tr>
                               <th>Method</th>
                               <th>Reserve Amount</th>
                               <th>Accuracy</th>
                           </tr>
                           <tr>
                               <td>Traditional</td>
                               <td style="color: var(--cc-red);">$115,000</td>
                               <td>❌ 432% Shortfall</td>
                           </tr>
                           <tr style="background: rgba(40, 167, 69, 0.1);">
                               <td><strong>AI-Enhanced</strong></td>
                               <td style="color: var(--cc-green);"><strong>$612,500</strong></td>
                               <td>✅ 84% Confidence</td>
                           </tr>
                       </table>
                   </div>
                   <div class="result-item">
                       <strong>Key Intelligence Applied:</strong>
                       <ul>
                           <li>✅ Complexity score updated: 2.5 → 9.1 (Critical)</li>
                           <li>✅ Reserve enhanced: $0 → $612,500</li>
                           <li>✅ Optimal adjuster assigned: Jennifer Torres</li>
                           <li>✅ Risk indicators activated</li>
                           <li>✅ Litigation risk escalated to CRITICAL</li>
                           <li>✅ Case description enhanced with AI insights</li>
                       </ul>
                   </div>
               </div>
               <div class="success-banner">
                   <strong>🎉 Success:</strong> AI prevented a $497,500 reserve shortfall while ensuring optimal care for the Martinez family. 
                   Claim is now properly configured for complex multi-generational trauma with minor involvement.
               </div>
           </div>
       `;
   }

   showModalResult(title, content) {
       const modal = document.getElementById('aiModal');
       const modalBody = document.getElementById('modalBody');
       
       modalBody.innerHTML = `
           <h3>${title}</h3>
           ${content}
       `;
       
       modal.style.display = 'flex';
       
       // Auto-close after 8 seconds unless user interacts
       setTimeout(() => {
           if (modal.style.display === 'flex') {
               this.closeModal();
           }
       }, 8000);
   }

   closeModal() {
       document.getElementById('aiModal').style.display = 'none';
   }

   updateStepButton(buttonId, state, text) {
       const button = document.getElementById(buttonId);
       button.className = `step-btn ${state}`;
       button.textContent = text;
       
       if (state === 'processing') {
           button.disabled = true;
           button.classList.add('processing');
       } else {
           button.disabled = false;
           button.classList.remove('processing');
       }
   }

   updateStepStatus(stepId, status) {
       const step = document.getElementById(stepId);
       const statusElement = step.querySelector('.step-status');
       
       step.className = `step-item ${status}`;
       
       switch(status) {
           case 'processing':
               statusElement.textContent = 'PROCESSING...';
               statusElement.style.background = 'var(--cc-orange)';
               break;
           case 'complete':
               statusElement.textContent = 'COMPLETE';
               statusElement.style.background = 'var(--cc-green)';
               break;
           default:
               statusElement.textContent = 'READY';
               statusElement.style.background = 'var(--cc-gray-light)';
       }
   }

   updateComplexityChart(score) {
       const scoreElement = document.getElementById('complexityScore');
       const chartElement = document.getElementById('complexityChart');
       
       scoreElement.textContent = score;
       
       const percentage = (parseFloat(score) / 10) * 100;
       let color = 'var(--cc-green)';
       
       if (percentage > 70) color = 'var(--cc-red)';
       else if (percentage > 40) color = 'var(--cc-orange)';
       
       chartElement.style.background = `conic-gradient(${color} ${percentage}%, var(--cc-gray-lighter) ${percentage}%)`;
       scoreElement.style.color = color;
   }

   completeStep(stepNumber) {
       this.completedSteps.push(stepNumber);
   }

   enableStep(stepNumber) {
       const button = document.getElementById(`btn-step${stepNumber}`);
       button.classList.remove('disabled');
       button.disabled = false;
       
       const status = document.getElementById(`step${stepNumber}`).querySelector('.step-status');
       status.textContent = 'READY';
       status.style.background = 'var(--cc-blue)';
   }

   delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }
}

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
   new ClaimCenterAIDemo();
});

// Add result styling to the page
const style = document.createElement('style');
style.textContent = `
.analysis-result {
   font-size: 13px;
   line-height: 1.5;
}

.analysis-result h4 {
   color: var(--cc-blue-dark);
   margin-bottom: 16px;
   font-size: 16px;
   border-bottom: 2px solid var(--cc-blue);
   padding-bottom: 8px;
}

.result-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 20px;
   margin: 16px 0;
}

.result-item {
   background: var(--cc-gray-lightest);
   padding: 16px;
   border-radius: 6px;
   border-left: 4px solid var(--cc-blue);
}

.result-item strong {
   color: var(--cc-navy);
   display: block;
   margin-bottom: 8px;
}

.result-item ul {
   margin: 8px 0;
   padding-left: 18px;
}

.result-item li {
   margin: 4px 0;
}

.result-table {
   width: 100%;
   border-collapse: collapse;
   margin: 12px 0;
   font-size: 12px;
}

.result-table th {
   background: var(--cc-gray-lighter);
   padding: 8px;
   text-align: left;
   font-weight: 600;
   border: 1px solid var(--cc-gray-light);
}

.result-table td {
   padding: 8px;
   border: 1px solid var(--cc-gray-light);
}

.result-table tr:nth-child(even) {
   background: rgba(248, 249, 250, 0.5);
}

.success-banner {
   background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0.05) 100%);
   border: 1px solid var(--cc-green);
   border-radius: 6px;
   padding: 16px;
   margin-top: 20px;
   color: var(--cc-green);
   font-weight: 500;
}

@media (max-width: 768px) {
   .result-grid {
       grid-template-columns: 1fr;
   }
}
`;
document.head.appendChild(style);
